export type recipe = {
  "id": number,
  "name": string,
  "description": string
  "duration": number,
  "ingredients": [ingredient],
  "instructions": [string],
  "tags": [string]
}

export type ingredient = {
  "ingredientName": string,
  "amount": number,
  "measurement": string
}

export type unfilledCategory = {
  "id": number,
  "name": string,
  "tags": number[]
}

export type category = {
  "id": number,
  "name": string,
  "tags": tag[]
}

export type tag = {
  "id": number,
  "name": string,
  "imgurl": string
}
