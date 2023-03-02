import { category, tag, unfilledCategory } from "../types"
import { buildOptions, baseURL } from "./fetchHelper"

export async function getAllUnfilledCategories(): Promise<unfilledCategory[]> {
  const response = await fetch(baseURL+"category/")
  const data = response.json()
  return data
}
