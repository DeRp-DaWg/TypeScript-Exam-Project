import { gql } from "@apollo/client";
import ApolloClientProvider from "../ApolloClientProvider";
import { CategoryType } from "../types";

type request = {
  formData(): Promise<FormData>
}

export default async function action({params, request}: {params: any, request: request}) {
  const client = ApolloClientProvider
  
  const mutation = gql`
    mutation AddRecipeToCategory($recipeId: ID!, $categoryId: ID!) {
      addRecipeToCategory(recipeId: $recipeId, categoryId: $categoryId)
    }
  `
  
  const formData = await request.formData()
  const result = await client.mutate({mutation: mutation, variables: {recipeId: formData.get("recipeId"), categoryId: params.categoryId}})
  const category = result.data.createCategory as CategoryType
  return {category}
}
