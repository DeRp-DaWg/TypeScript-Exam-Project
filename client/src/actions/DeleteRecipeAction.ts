import { FetchResult, gql } from "@apollo/client";
import ApolloClientProvider from "../ApolloClientProvider";
import { IngredientType, RecipeType } from "../types";
import { redirect } from "react-router-dom";

export default async function action({params, request}: {params: any, request: Request}) {
  const client = ApolloClientProvider
    
  const deleteRecipeMutation = gql`
    mutation DeleteRecipe($deleteRecipeId: ID!) {
      deleteRecipe(id: $deleteRecipeId)
    }
  `
  
  const recipeResult: FetchResult<any> | Error = await client.mutate({mutation: deleteRecipeMutation, variables: {
    deleteRecipeId: params.recipeId
  }})
  .then((data) => {
    return data
  })
  .catch((error) => {
    return error
  })
  if (recipeResult instanceof Error) {
    return {}
  }
  return redirect("/")
}
