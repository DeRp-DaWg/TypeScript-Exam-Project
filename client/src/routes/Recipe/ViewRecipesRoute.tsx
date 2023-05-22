import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { RecipeType } from '../../types'
import RecipeCard from '../../components/RecipeCard'
import { Button } from '@mui/material'

type Props = {}

export default function ViewRecipesRoute({}: Props) {
  const {recipes} = useLoaderData() as {recipes: RecipeType[]}
  const navigate = useNavigate()
  
  return (
    <>
      <Button variant='outlined' onClick={() => navigate("create")}>Create new recipe</Button>
      {recipes.map(recipe => 
        <RecipeCard key={recipe.id} recipe={recipe}/>
      )}
    </>
  )
}