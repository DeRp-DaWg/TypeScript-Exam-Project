import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { RecipeType } from '../../types'
import { Typography } from '@mui/material'

type Props = {}

export default function ViewRecipeRoute({}: Props) {
  const {recipe} = useLoaderData() as {recipe: RecipeType}
  
  console.log(recipe)
  
  return (
    <>
      <Typography variant='h3'>{recipe.name}</Typography>
      <Typography variant='body1'>{recipe.description}</Typography>
      <Typography variant='h4'>Duration</Typography>
      <Typography variant='body1'>{recipe.duration} minutter</Typography>
      <Typography variant='h4'>Ingredients</Typography>
      {recipe.ingredients.map((ingredient) => {
        return (
          <Typography>{ingredient.name}: {ingredient.amount} {ingredient.measurement}</Typography>
        )
      })}
      <Typography variant='h4'>Instructions</Typography>
      <ol>
      {recipe.instructions.map((instruction) => {
        return (
          
            <li>
              <Typography variant='body1'>{instruction}</Typography>
            </li>
          
        )
      })}
      </ol>
    </>
  )
}