import React, { useState } from 'react'
import { capatilizeFirstChar } from '../helpers'
import { CategoryType } from '../types'
import SearchBar from './SearchBar'

type Props = {
  category: CategoryType
}

export default function CategoryContainer({category}: Props) {
  return (
    <div className='categoryContainer'>
      <h2>{capatilizeFirstChar(category.name)}</h2>
      {/* <SearchBar items={allTags} searchSetter={setTags}/> */}
    </div>
  )
}
