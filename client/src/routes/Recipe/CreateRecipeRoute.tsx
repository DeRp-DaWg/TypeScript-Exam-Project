import { Box, Button, Slider, Stack, TextField, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRow, GridRowsProp, useGridApiContext, useGridApiRef } from '@mui/x-data-grid';
import React, { ChangeEvent, useCallback, useState } from 'react'
import { Form, useNavigate, useSubmit } from 'react-router-dom'
import { IngredientType } from '../../types'

type Props = {}

export default function CreateRecipeRoute({}: Props) {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [duration, setDuration] = useState<number>(0)
  const [ingredients, setIngredients] = useState<IngredientType[]>([])
  const [rows, setRows] = useState<GridRowsProp>([])
  const [instructions, setInstructions] = useState<string[]>([])
  const submit = useSubmit()
  const navigate = useNavigate()
  
  const apiRef = useGridApiRef()
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    formData.append("duration", duration.toString())
    const rowModels = Array.from(apiRef.current.getRowModels().values())
    rowModels.forEach(rowModel => {
      rowModel.amount = parseInt(rowModel.amount)
    })
    formData.append("ingredients", JSON.stringify(rowModels))
    
    formData.append("instructions", JSON.stringify(instructions))
    
    submit(formData, {
      method: "post",
      action: ""
    })
    
    console.log("test")
    // navigate("/recipes")
  }
  
  function addIngredientRow() {
    setRows([...rows, {id: rows.length, name: "", amount: 0, measurement: ""}])
  }
  
  function addInstructionRow() {
    setInstructions([...instructions, ""])
  }
  
  const columns: GridColDef[] = [
    { field: 'index', headerName: '#', width: 100, filterable: false, sortable: false, renderCell:(index)=>index.api.getRowIndexRelativeToVisibleRows(index.row.id)},
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'amount', headerName: 'Amount', width: 150, editable: true },
    { field: 'measurement', headerName: 'Measurement', width: 150, editable: true }
  ]
  
  const handleInstructionChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const newInstructions = [...instructions]
    newInstructions[index] = event.target.value
    setInstructions(newInstructions)
  }, [instructions])
  
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
        <Button onClick={addIngredientRow} variant='outlined'>Add new ingredient</Button>
        <DataGrid apiRef={apiRef} rows={rows} columns={columns}/>
        <Button onClick={addInstructionRow} variant='outlined'>Add new instruction</Button>
        <Stack direction="column">
          {instructions.map((instruction, index) => 
            <TextField
              key={index}
              value={instruction}
              onChange={(event) => handleInstructionChange(event, index)}
            />
          )}
        </Stack>
        <Button type='submit' variant='outlined'>Create</Button>
      </Form>
    </>
  )
}