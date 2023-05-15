import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { CategoryType } from '../../types'
import CategoryContainer from '../../components/CategoryContainer'
import { Button } from '@mui/material'

type Props = {}

export default function ViewCategoriesRoute({}: Props) {
  const {categories} = useLoaderData() as {categories: CategoryType[]}
  const navigate = useNavigate()
  
  function renderRecipes(): JSX.Element[] {
    return categories.map((category) => {
      return (
        <CategoryContainer key={category.id} category={category}/>
      )
    })
  }
  
  return (
    <>
      <Button variant='outlined' onClick={() => navigate("create")}>Create new category</Button>
      {renderRecipes()}
    </>
  )
}