import { Category, Tag, UnfilledCategory } from "../types"
import { buildOptions, baseURL } from "./fetchHelper"

export async function getAllUnfilledCategories(): Promise<UnfilledCategory[]> {
  const response = await fetch(baseURL+"category/")
  const data = response.json()
  return data
}
