import React from 'react'
import { tag } from '../types'

type Props = {
  tag: tag
}

export default function Card({tag}: Props) {
  return (
    <div>
      <img src={"http://localhost:5173/"+tag.imgurl}/>
    </div>
  )
}