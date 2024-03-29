import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { RecipeType } from '../types'
import { useNavigate } from 'react-router-dom'

type Props = {
  recipe: RecipeType
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
}

export default function RecipeCard({recipe, onClick}: Props) {
  const navigate = useNavigate()
  
  function onCardClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    navigate("/recipes/"+event.currentTarget.dataset.id)
  }
  
  return (
    <Card>
      <CardActionArea data-id={recipe.id} onClick={(event) => {onClick ? onClick(event) : onCardClick(event)}}>
      
      <CardHeader
        title={recipe.name}
      />
      <CardMedia
        component="img"
        height="200"
        image={recipe.imgURL}
      />
      <CardContent sx={{height: 93, overflowWrap: "break-word"}}>
        <Typography>{recipe.description}</Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  )
}