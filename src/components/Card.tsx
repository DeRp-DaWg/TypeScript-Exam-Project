import React from 'react'
import { capatilizeFirstChar } from '../helpers'
import { Tag } from '../types'

type Props = {
  tag: Tag
}

export default function Card({tag}: Props) {
  return (
    <div className='card'>
      <h3>{capatilizeFirstChar(tag.name)}</h3>
      <img src={"http://localhost:5173/"+tag.imgurl}/>
    </div>
  )
}
