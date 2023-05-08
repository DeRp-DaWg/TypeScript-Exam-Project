import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import { CategoryType } from '../../types'

interface Props {}

export default function CategoryPage({}: Props) {
  return (
    <>
      <Outlet/>
    </>
  )
}