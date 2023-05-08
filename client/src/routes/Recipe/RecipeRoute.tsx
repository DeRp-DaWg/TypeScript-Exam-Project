import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { getRecipe } from '../../fetchers/recipeFetcher'
import { RecipeType } from '../../types'

interface Props {}

export default function RecipePage({}: Props) {
  return (
    <>
      <Outlet/>
    </>
  )
}