import React from 'react'
import { tag } from '../types'
import Card from './Card'

type Props = {
  tags: tag[]
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
    <div>
      {renderCards()}
    </div>
  )
}