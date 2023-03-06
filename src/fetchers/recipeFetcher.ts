import { Recipe } from "../types"
import { buildOptions, baseURL } from "./fetchHelper"

export async function getRecipe(id: number): Promise<Recipe> {
  const response = await fetch(baseURL+"recipe/"+id)
  const data = response.json()
  return data
}
