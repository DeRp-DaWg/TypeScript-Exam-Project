import { gql } from "@apollo/client";
import ApolloClientProvider from "../ApolloClientProvider";
import { RecipeType } from "../types";

type request = {
  formData(): Promise<FormData>
}

export default async function action({params, request}: {params: any, request: request}) {
  const client = ApolloClientProvider
  
  const mutation = gql`
    mutation CreateRecipe($name: String!, $description: String!, $duration: Int!) {
      createRecipe(name: $name, description: $description, duration: $duration) {
        id
        name
        description
        duration
      }
    }
  `
  const formData = await request.formData()
  // console.log(formData)
  const result = await client.mutate({mutation: mutation, variables: {
    name: formData.get("name"),
    description: formData.get("description"),
    duration: parseInt(formData.get("duration")!.toString())
  }})
  console.log(result)
  const recipe = result.data.createRecipe as RecipeType
  return {recipe}
}
