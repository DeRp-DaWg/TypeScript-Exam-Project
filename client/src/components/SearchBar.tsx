import React from 'react'
import { Tag } from '../types'

type Props = {
  items: string[]
  searchSetter: React.Dispatch<React.SetStateAction<Tag[]>>
}

export default function SearchBar({items, searchSetter}: Props) {
  function search(event: React.ChangeEvent<HTMLInputElement>) {
    const search = event.target.value
    const validItems: string[] = []
    items.forEach(item => {
      if (item.includes(search)) {
        validItems.push(item)
      }
    })
    // searchSetter(validItems)
  }
  
  return (
    <input type="text" onChange={search}/>
  )
}
