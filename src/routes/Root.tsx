import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

interface Props {}

export default function Root({}: Props) {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}