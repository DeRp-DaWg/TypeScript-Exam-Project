import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { RecipeType } from '../types'
import { useNavigate } from 'react-router-dom'

type Props = {
  recipe: RecipeType
}

export default function RecipeCard({recipe}: Props) {
  const navigate = useNavigate()
  
  function onCardClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    navigate("/recipes/"+event.currentTarget.dataset.id)
  }
  
  return (
    <Card>
      <CardActionArea data-id={recipe.id} onClick={onCardClick}>
      <CardHeader
        title={recipe.name}
      />
      <CardMedia
        component="img"
        height="200"
        image="/public/lasagne.png"
      />
      <CardContent sx={{height: 93, overflowWrap: "break-word"}}>
        <Typography>{recipe.description}</Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  )
}