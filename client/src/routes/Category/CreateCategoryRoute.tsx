import { Button, FormControl, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Form, useNavigate, useRevalidator } from 'react-router-dom'
import { useSubmit } from 'react-router-dom'

type Props = {}

export default function CreateCategoryRoute({}: Props) {
  const [name, setName] = useState<string>("")
  const [imgURL, setImgURL] = useState<string>("")
  const submit = useSubmit()
  const navigate = useNavigate()
  const revalidate = useRevalidator()
  
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setName(event.target.value)
  }
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("imgURL", imgURL)

    submit(formData, {
      method: "post"
    })
    
    revalidate.revalidate()
    navigate("/categories")
  }
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextField id='name' label='Name' variant='outlined' value={name} onChange={handleChange} />
        <TextField id='imgURL' label='Image URL' variant='outlined' value={imgURL} onChange={event => setImgURL(event.target.value)} />
        <Button type='submit'>Create</Button>
      </Form>
    </>
  )
}
