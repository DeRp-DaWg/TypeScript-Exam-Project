import { Button, FormControl, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { useSubmit } from 'react-router-dom'

type Props = {}

export default function CreateCategoryRoute({}: Props) {
  const [name, setName] = useState<string>("")
  const submit = useSubmit()
  
  
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setName(event.target.value)
  }
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData()
    formData.append("name", name)
    
    submit(formData, {
      method: "post",
      action: ""
    })
  }
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextField id='name' label='Name' variant='outlined' value={name} onChange={handleChange} />
        <Button type='submit'>Create</Button>
      </Form>
    </>
  )
}
