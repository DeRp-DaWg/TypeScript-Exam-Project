import React, { useState } from 'react'
import { Category, Tag } from '../types'
import CardGroup from './CardGroup'
import SearchBar from './SearchBar'

type Props = {
  category: Category
}

export default function CategoryContainer({category}: Props) {
  const [allTags, setAllTags] = useState<Tag[]>(category.tags)
  const [tags, setTags] = useState<Tag[]>(JSON.parse(JSON.stringify(allTags)))
  
  return (
    <div className='categoryContainer'>
      {/* <SearchBar items={allTags} searchSetter={setTags}/> */}
      <CardGroup tags={tags}/>
    </div>
  )
}
