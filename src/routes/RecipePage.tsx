import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getRecipe } from '../fetchers/recipeFetcher'
import { recipe } from '../types'

interface Props {}

export default function RecipePage({}: Props) {
  const {recipe} = useLoaderData() as {recipe: recipe}
  
  function renderIngredients(): JSX.Element[] {
    return recipe.ingredients.map(
      ingredient => {
        return (
          <tr key={"ingredient-"+ingredient.ingredientName}>
            <td>{ingredient.ingredientName}</td>
            <td>{ingredient.amount}</td>
            <td>{ingredient.measurement}</td>
          </tr>
        )
      }
    )
  }
  
  function renderInstructions(): JSX.Element[] {
    return recipe.instructions.map(
      (instruction, index) => {
        return (
          <li key={"instruction-"+index}>
            {instruction}
          </li>
        )
      }
    )
  }
  
  return (
    <div>
      {/* <button onClick={handleClick}>Click me!</button> */}
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
      <table>
        {/* <thead>
          <tr>
            <th>ingredient</th>
            <th>amount</th>
            <th>measurement</th>
          </tr>
        </thead> */}
        <tbody>
          {renderIngredients()}
        </tbody>
      </table>
      <ol>
        {renderInstructions()}
      </ol>
    </div>
  )
}