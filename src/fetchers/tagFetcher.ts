import { Tag } from "../types"
import { buildOptions, baseURL } from "./fetchHelper"

export async function getAllTags(): Promise<Tag[]> {
  const response = await fetch(baseURL+"tag/")
  const data = response.json()
  return data
}

export async function getTag(id: number): Promise<Tag> {
  const response = await fetch(baseURL+"tag/"+id)
  const data = response.json()
  return data
}
