import { FetchResult, gql } from "@apollo/client";
import ApolloClientProvider from "../ApolloClientProvider";
import { IngredientType, RecipeType } from "../types";
import { redirect } from "react-router-dom";

export default async function action({params, request}: {params: any, request: Request}) {
  const client = ApolloClientProvider
  
  const formData = await request.formData()
  
  const oldRecipe: RecipeType = JSON.parse(formData.get("oldRecipe")!.toString())
  
  // Start by deleting the already existing ingredients
  const deleteIngredientMutation = gql`
    mutation DeleteIngredient($deleteIngredientId: ID!) {
      deleteIngredient(id: $deleteIngredientId)
    }
  `
  
  for (const ingredient of oldRecipe.ingredients) {
    const ingredientResult: FetchResult<any> | Error = await client.mutate({mutation: deleteIngredientMutation, variables: {
      deleteIngredientId: ingredient.id
    }})
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
    if (ingredientResult instanceof Error) {
      return {}
    }
  }
  
  // Update the recipe
  const recipeMutation = gql`
    mutation UpdateRecipe($updateRecipeId: ID!, $name: String, $description: String, $duration: Int, $imgUrl: String) {
      updateRecipe(id: $updateRecipeId, name: $name, description: $description, duration: $duration, imgURL: $imgUrl) {
        id
      }
    }
  `
  
  const recipeResult: FetchResult<any> | Error = await client.mutate({mutation: recipeMutation, variables: {
    updateRecipeId: oldRecipe.id,
    name: formData.get("name"),
    description: formData.get("description"),
    duration: parseInt(formData.get("duration")!.toString()),
    imgUrl: formData.get("imgURL")
  }})
  .then((data) => {
    console.log(data)
    return data
  })
  .catch((error) => {
    console.log(error)
    return error
  })
  if (recipeResult instanceof Error) {
    return {}
  }
  const recipe = recipeResult.data.updateRecipe as RecipeType
  console.log(recipe)
  
  // Update the ingredients
  
  const updateIngredientsMutation = gql`
    mutation UpdateIngredientsFromRecipe($recipeId: ID!, $ingredients: [IngredientInput]!) {
      updateIngredientsFromRecipe(recipeId: $recipeId, ingredients: $ingredients)
    }
  `
  
  const ingredients: IngredientType[] = JSON.parse(formData.get("ingredients")!.toString())
  
  ingredients.forEach((ingredient) => {
    const {__typename, id, ...rest} = ingredient as any
    //@ts-ignore
    ingredient = rest
  })
  
  const updateIngredientsResult: FetchResult<any> | Error = await client.mutate({mutation: updateIngredientsMutation, variables: {
    recipeId: recipe.id,
    ingredients: ingredients
  }})
  .then((data) => {
    return data
  })
  .catch((error) => {
    return error
  })
  console.log(updateIngredientsResult)
  if (updateIngredientsResult instanceof Error) {
    return {}
  }
  
  // Update the instructions
  
  const updateInstructionsMutation = gql`
    mutation UpdateInstructionsFromRecipe($recipeId: ID!, $instructions: [String!]!) {
      updateInstructionsFromRecipe(recipeId: $recipeId, instructions: $instructions)
    }
  `
  
  const instructions: string[] = JSON.parse(formData.get("instructions")!.toString())
  
  const updateInstructions: FetchResult<any> | Error = await client.mutate({mutation: updateInstructionsMutation, variables: {
    recipeId: recipe.id,
    instructions: instructions
  }})
  .then((data) => {
    return data
  })
  .catch((error) => {
    return error
  })
  if (updateInstructions instanceof Error) {
    return {}
  }
  
  
  // return redirect("/recipes/"+recipe.id)
  return null
}
