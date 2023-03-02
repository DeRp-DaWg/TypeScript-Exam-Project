import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {}

export default function Root({}: Props) {
  return (
    <div>
      <Outlet/>
    </div>
  )
}