import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

export default function Navbar({}: Props) {
  return (
    <div className='navbar'>
      <Link to={"/"}>Frontpage</Link>
      <Link to={"search"}>Search for recipes</Link>
    </div>
  )
}