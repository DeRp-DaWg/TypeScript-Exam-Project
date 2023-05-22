import { FetchResult, gql } from "@apollo/client";
import ApolloClientProvider from "../ApolloClientProvider";
import { IngredientType, RecipeType } from "../types";
import { redirect } from "react-router-dom";

export default async function action({params, request}: {params: any, request: Request}) {
  const client = ApolloClientProvider
  
  const formData = await request.formData()
  
  // Create the ingredients
  const ingredientMutation = gql`
    mutation CreateIngredient($name: String!, $amount: Int!, $measurement: String!) {
      createIngredient(name: $name, amount: $amount, measurement: $measurement) {
        id
      }
    }
  `
  
  const ingredients: IngredientType[] = JSON.parse(formData.get("ingredients")!.toString())
  const ingredientIDs: string[] = []
  for (const ingredient of ingredients) {
    const ingredientResult: FetchResult<any> | Error = await client.mutate({mutation: ingredientMutation, variables: {
      name: ingredient.name,
      amount: ingredient.amount,
      measurement: ingredient.measurement
    }})
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
    console.log(ingredientResult)
    if (ingredientResult instanceof Error) {
      return {}
    }
    ingredientIDs.push(ingredientResult.data.createIngredient.id)
  }
  
  // Create the recipe
  const recipeMutation = gql`
    mutation CreateRecipe($name: String!, $description: String!, $duration: Int!, $imgUrl: String) {
      createRecipe(name: $name, description: $description, duration: $duration, imgURL: $imgUrl) {
        id
      }
    }
  `
  
  const recipeResult: FetchResult<any> | Error = await client.mutate({mutation: recipeMutation, variables: {
    name: formData.get("name"),
    description: formData.get("description"),
    duration: parseInt(formData.get("duration")!.toString()),
    imgUrl: formData.get("imgURL")
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
  const recipe = recipeResult.data.createRecipe as RecipeType
  
  // Add ingredients to recipe
  const addIngredientMutaion = gql`
    mutation AddIngredientToRecipe($recipeId: ID!, $ingredientId: ID!) {
      addIngredientToRecipe(recipeId: $recipeId, ingredientId: $ingredientId)
    }
  `
  
  for (const ingredientID of ingredientIDs) {
    const addIngredientResult: FetchResult<any> | Error = await client.mutate({mutation: addIngredientMutaion, variables: {
      recipeId: recipe.id,
      ingredientId: ingredientID
    }})
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
    console.log(addIngredientResult)
    if (addIngredientResult instanceof Error) {
      return {}
    }
  }
  
  console.log(recipe)
  // Add instructions to recipe
  
  const addInstructionMutation = gql`
    mutation AddInstructionToRecipe($recipeId: ID!, $instruction: String!) {
      addInstructionToRecipe(recipeId: $recipeId, instruction: $instruction)
    }
  `
  
  const instructions: string[] = JSON.parse(formData.get("instructions")!.toString())
  
  for (const instruction of instructions) {
    const addInstruction: FetchResult<any> | Error = await client.mutate({mutation: addInstructionMutation, variables: {
      recipeId: recipe.id,
      instruction: instruction
    }})
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
    if (addInstruction instanceof Error) {
      return {}
    }
  }
  
  // return {recipe: {...recipe, ingredients: ingredients, instructions: instructions}}
  return redirect("/recipes/"+recipe.id)
}
