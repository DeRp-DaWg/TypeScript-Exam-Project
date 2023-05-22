import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CategoryContainer from '../components/CategoryContainer'
import { CategoryType } from '../types'
import { Typography } from '@mui/material'

type Props = {
  
}

export default function Index({}: Props) {
  const {categories} = useLoaderData() as {categories: CategoryType[]}
    
  return (
    <>
      <Typography variant='h1' textAlign={"center"}>Welcome!</Typography>
      <Typography variant='subtitle1' textAlign={"center"}>To our recipe sharing site</Typography>
      <Link to={"recipe"}/>
    </>
  )
}
