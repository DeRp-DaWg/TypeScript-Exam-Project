import React, { useState } from 'react'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { CategoryType, RecipeType } from '../../types'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { CardHeader } from 'material-ui'
import RecipeCard from '../../components/RecipeCard'

type Props = {}

export default function ViewCategoryRoute({}: Props) {
  const {category} = useLoaderData() as {category: CategoryType}
  const navigate = useNavigate()
  
  function renderRecipes(recipes: RecipeType[]) {
    return recipes.map((recipe) => {
      return (
        <Grid item key={recipe.id}>
          <Box width={210}>
            <RecipeCard recipe={recipe}/>
          </Box>
        </Grid>
      )
    })
  }
  
  function handleAddRecipeClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    navigate("addRecipe")
  }
    
  return (
    <>
      <Button variant='outlined' onClick={handleAddRecipeClick}>Add recipe</Button>
      <Outlet/>
      <Grid container direction={"column"} spacing={1}>
        <Grid item>
          <Typography variant='h3'>{category.name}</Typography>
        </Grid>
        <Grid item>
          <Box width={500} height={500} overflow={'hidden'} >
            <img src={category.imgURL} style={{width: 500, height: 500}}/>
          </Box>
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            {renderRecipes(category.recipes)}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}