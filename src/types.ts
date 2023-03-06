export type Recipe = {
  "id": number,
  "name": string,
  "description": string
  "duration": number,
  "ingredients": [Ingredient],
  "instructions": [string],
  "tags": [string]
}

export type Ingredient = {
  "ingredientName": string,
  "amount": number,
  "measurement": string
}

export type UnfilledCategory = {
  "id": number,
  "name": string,
  "tags": number[]
}

export type Category = {
  "id": number,
  "name": string,
  "tags": Tag[]
}

export type Tag = {
  "id": number,
  "name": string,
  "imgurl": string
}
