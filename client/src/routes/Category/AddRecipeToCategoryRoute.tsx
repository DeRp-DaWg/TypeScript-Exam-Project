import React from 'react'
import { useLoaderData, useRouteLoaderData, useSubmit } from 'react-router-dom'
import { RecipeType } from '../../types'
import RecipeCard from '../../components/RecipeCard'
import { Box, Grid } from '@mui/material'

type Props = {}

export default function AddRecipeToCategoryRoute({}: Props) {
  const {recipes} = useLoaderData() as {recipes: RecipeType[]}
  const submit = useSubmit()
  console.log(recipes)
  
  function handleRecipeClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const formData = new FormData()
    formData.append("recipeId", event.currentTarget.dataset.id!.toString())
    
    submit(formData, 
      {
        method: "post"
      }
    )
  }
  
  function renderRecipes(recipes: RecipeType[]) {
    return recipes.map((recipe) => {
      return (
        <Grid item>
          <Box width={210}>
            <RecipeCard recipe={recipe} onClick={handleRecipeClick}/>
          </Box>
        </Grid>
      )
    })
  }
  
  return (
    <>
      <Grid container spacing={1}>
        {renderRecipes(recipes)}
      </Grid>
    </>
  )
}