import React from 'react'
import { Link } from 'react-router-dom'
import { capatilizeFirstChar } from '../helpers'
import { Tag } from '../types'

type Props = {
  tag: Tag
}

export default function Card({tag}: Props) {
  return (
    <div className='card'>
      <h3>{capatilizeFirstChar(tag.name)}</h3>
      <Link to={"search/"+JSON.stringify([tag.id])}><img src={"http://localhost:5173/"+tag.imgurl}/></Link>
    </div>
  )
}
