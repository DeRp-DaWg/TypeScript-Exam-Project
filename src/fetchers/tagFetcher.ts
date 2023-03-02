import { tag } from "../types"
import { buildOptions, baseURL } from "./fetchHelper"

export async function getAllTags(): Promise<tag[]> {
  const response = await fetch(baseURL+"tag/")
  const data = response.json()
  return data
}

export async function getTag(id: number): Promise<tag> {
  const response = await fetch(baseURL+"tag/"+id)
  const data = response.json()
  return data
}
