import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { CategoryType } from '../../types'
import CategoryContainer from '../../components/CategoryContainer'

type Props = {}

export default function ViewCategoriesRoute({}: Props) {
  const {categories} = useLoaderData() as {categories: CategoryType[]}
  
  function renderRecipes(): JSX.Element[] {
    return categories.map((category) => {
      return (
        <CategoryContainer key={category.id} category={category}/>
      )
    })
  }
  
  return (
    <div>
      {renderRecipes()}
    </div>
  )
}