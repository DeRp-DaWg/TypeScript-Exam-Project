import React, { useState } from 'react'
import { capatilizeFirstChar } from '../helpers'
import { CategoryType } from '../types'
import SearchBar from './SearchBar'
import { Container, Grid, Typography, Card, CardHeader, CardContent, Stack, Box, Avatar, IconButton, CardMedia, CardActionArea, Link } from '@mui/material'
import { blue, red } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import RecipeCard from './RecipeCard'

type Props = {
  category: CategoryType
}

export default function CategoryContainer({category}: Props) {
  const navigate = useNavigate()
  
  function onGridClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(event.currentTarget.dataset.id);
    navigate("/recipes/"+event.currentTarget.dataset.id)
  }
  
  return (
    <div className='categoryContainer'>
      <Container maxWidth="xl" sx={{ pt: 8, pb: 6 }}>
        {/* <Typography variant='h5' align='center' color='text.primary' marginBottom={4}> */}
        <Link variant='h5' align='center' display="inherit" color='text.primary' marginBottom={4} underline="hover" onClick={() => {navigate("/categories/"+category.id)}}>
          {category.name}
        </Link>
        {/* </Typography> */}
        {/* <Typography variant='h5' align='center' color='text.primary' marginBottom={4}>{category.name}</Typography> */}
        <Container maxWidth="xl" component="main">
          <Box border={1} borderRadius={1} overflow="hidden" minWidth={290+2*8*2+2}>
            <Stack direction="row" spacing={2} alignItems="flex-end" padding={2} sx={{overflowY: "hidden", overflowX: "auto"}}>
              {category.recipes.map((recipe) => (
                <Box key={recipe.id} data-id={recipe.id} minWidth={290} >
                  {/* <Card>
                    <CardActionArea data-id={recipe.id} onClick={onGridClick}>
                    <CardHeader
                      title={recipe.name}
                      avatar={
                        <Avatar sx={{bgcolor: red[200]}}>
                          L
                        </Avatar>
                      }
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
                  </Card> */}
                  <RecipeCard recipe={recipe}/>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Container>
      {/* <SearchBar items={allTags} searchSetter={setTags}/> */}
    </div>
  )
}
