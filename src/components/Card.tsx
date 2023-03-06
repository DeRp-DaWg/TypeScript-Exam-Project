import React from 'react'
import { Tag } from '../types'

type Props = {
  tag: Tag
}

export default function Card({tag}: Props) {
  return (
    <div>
      <img src={"http://localhost:5173/"+tag.imgurl}/>
    </div>
  )
}