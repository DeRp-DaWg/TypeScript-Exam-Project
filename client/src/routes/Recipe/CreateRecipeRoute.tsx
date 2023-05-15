import { Box, Button, Slider, Stack, TextField, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import React, { useState } from 'react'
import { Form, useSubmit } from 'react-router-dom'
import { IngredientType } from '../../types'

type Props = {}

export default function CreateRecipeRoute({}: Props) {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [duration, setDuration] = useState<number>(0)
  const [ingredients, setIngredients] = useState<IngredientType[]>([])
  const submit = useSubmit()
  
  
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setName(event.target.value)
  }
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    formData.append("duration", duration.toString())
    
    submit(formData, {
      method: "post",
      action: ""
    })
  }
  
  // function createIngredient() {
  //   console.log("created")
  //   const newIngredient: IngredientType = {name: "", amount: 0, measurement: ""}
  //   setIngredients([...ingredients, newIngredient])
  // }
  
  // function updateIngredient(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  //   const index = parseInt(event.target.dataset.index as string)
  //   const type = event.target.dataset.type
  //   const value = event.target.value
    
  //   const newIngredient = ingredients.at(index) as IngredientType
    
  //   switch (type) {
  //     case "name":
  //       newIngredient.name = value
  //       break;
  //     case "amount":
  //       newIngredient.amount = parseInt(value)
  //       break;
  //     case "measurement":
  //       newIngredient.measurement = value
  //       break;
  //     default:
  //       return;
  //   }
    
  //   const newIngredients = [...ingredients]
  //   newIngredients[index] = newIngredient
  //   setIngredients(newIngredients)
  // }
  
  function addRow() {
    
  }
  
  const rows: GridRowsProp = [
  ]
  
  const columns: GridColDef[] = [
    { field: 'index', headerName: '#', width: 100, filterable: false, sortable: false, renderCell:(index)=>index.api.getRowIndexRelativeToVisibleRows(index.row.id)},
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'amount', headerName: 'Amount', width: 150, editable: true },
    { field: 'measurement', headerName: 'Measurement', width: 150, editable: true }
  ]
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextField id='name' label='Name' variant='outlined' value={name} onChange={event => setName(event.target.value)} />
        <TextField id='description' label='Description' variant='outlined' value={description} onChange={event => setDescription(event.target.value)} />
        <Slider  step={5} marks min={5} max={40} value={duration} valueLabelDisplay="auto" onChange={(event, newValue) => setDuration(newValue as number)} />
        <Typography variant='h5'>Ingredients</Typography>
        {/* <Stack direction="column">
          {ingredients.map((ingredient, index) => 
            <Box key={index}>
              <TextField value={ingredient.name} data-index={index} data-type="name" onChange={updateIngredient}/>
              <TextField value={ingredient.name} data-index={index} data-type="amount" onChange={updateIngredient}/>
              <TextField value={ingredient.name} data-index={index} data-type="measurement" onChange={updateIngredient}/>
            </Box>
          )}
        </Stack>
        <Button variant='outlined' onClick={createIngredient}>Create ingredient</Button> */}
        <DataGrid rows={rows} columns={columns}/>
        <Button type='submit'>Create</Button>
      </Form>
    </>
  )
}