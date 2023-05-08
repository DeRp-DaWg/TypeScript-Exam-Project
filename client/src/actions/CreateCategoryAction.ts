import { gql } from "@apollo/client";
import ApolloClientProvider from "../ApolloClientProvider";
import { CategoryType } from "../types";

type request = {
  formData(): Promise<FormData>
}

export default async function action({params, request}: {params: any, request: request}) {
  const client = ApolloClientProvider
  
  const mutation = gql`
    mutation CreateCategory($name: String!) {
      createCategory(name: $name) {
        id
        name
      }
    }
  `
  const formData = await request.formData()
  const result = await client.mutate({mutation: mutation, variables: {name: formData.get("name")}})
  const category = result.data.createCategory as CategoryType
  return {category}
}
