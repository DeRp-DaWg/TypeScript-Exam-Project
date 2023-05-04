import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { CategoryType } from '../types'

interface Props {}

export default function CategoryPage({}: Props) {
  const {category} = useLoaderData() as {category: CategoryType}
  
  function renderRecipes(): JSX.Element[] {
    return category.recipes.map(
      recipe => {
        return (
          <tr key={"ingredient-"+recipe.name}>
            <td>{recipe.name}</td>
            <td>{recipe.description}</td>
            <td>{recipe.duration}</td>
          </tr>
        )
      }
    )
  }
  
  return (
    <div>
      <h1>{category.name}</h1>
      {renderRecipes()}
    </div>
  )
}