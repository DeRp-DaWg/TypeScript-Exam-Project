import { gql } from "@apollo/client";
import ApolloClientProvider from "../ApolloClientProvider";
import { CategoryType } from "../types";

type request = {
  formData(): Promise<FormData>
}

export default async function action({params, request}: {params: any, request: request}) {
  const client = ApolloClientProvider
  
  const mutation = gql`
    mutation CreateCategory($name: String!, $imgUrl: String) {
      createCategory(name: $name, imgURL: $imgUrl) {
        id
      }
    }
  `
  const formData = await request.formData()
  const result = await client.mutate({mutation: mutation, variables: {name: formData.get("name"), imgUrl: formData.get("imgURL")}})
  const category = result.data.createCategory as CategoryType
  return {category}
}
