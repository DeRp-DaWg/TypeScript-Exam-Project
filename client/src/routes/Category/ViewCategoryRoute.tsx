import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { CategoryType, RecipeType } from '../../types'
import { Card, Typography } from '@mui/material'
import { CardHeader } from 'material-ui'
import RecipeCard from '../../components/RecipeCard'

type Props = {}

export default function ViewCategoryRoute({}: Props) {
  const {category} = useLoaderData() as {category: CategoryType}
  
  function renderRecipes(recipes: RecipeType[]) {
    return recipes.map((recipe) => {
      return (
        <RecipeCard recipe={recipe}/>
      )
    })
  }
  
  return (
    <>
      <Typography variant='h3'>{category.name}</Typography>
      {renderRecipes(category.recipes)}
    </>
  )
}