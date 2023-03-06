import React from 'react'
import { Tag } from '../types'
import Card from './Card'

type Props = {
  tags: Tag[]
}

export default function CardGroup({tags}: Props) {
  function renderCards(): JSX.Element[] {
    return tags.map(tag => {
      return (
        <Card key={"tag-"+tag.id} tag={tag}></Card>
      )
    })
  }
  
  return (
    <div className='cardGroup'>
      {renderCards()}
    </div>
  )
}
