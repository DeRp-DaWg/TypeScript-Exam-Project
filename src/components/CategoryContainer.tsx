import React, { useState } from 'react'
import { category, tag } from '../types'
import CardGroup from './CardGroup'
import SearchBar from './SearchBar'

type Props = {
  category: category
}

export default function CategoryContainer({category}: Props) {
  const [allTags, setAllTags] = useState<tag[]>(category.tags)
  const [tags, setTags] = useState<tag[]>(JSON.parse(JSON.stringify(allTags)))
  
  return (
    <div className='categoryContainer'>
      {/* <SearchBar items={allTags} searchSetter={setTags}/> */}
      <CardGroup tags={tags}/>
    </div>
  )
}
