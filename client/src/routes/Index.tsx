import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CategoryContainer from '../components/CategoryContainer'
import { CategoryType } from '../types'

type Props = {
  
}

export default function Index({}: Props) {
  const {categories} = useLoaderData() as {categories: CategoryType[]}
  
  console.log(categories)
  
  function renderCategoryContainers(): JSX.Element[] {
    return categories.map(category => {
      return (
        <CategoryContainer key={"category-"+category.name} category={category}/>
      )
    })
  }
  
  return (
    <div>
      {/* <Slide category={categories[0]}/> */}
      {renderCategoryContainers()}
      <Link to={"recipe"}/>
    </div>
  )
}
