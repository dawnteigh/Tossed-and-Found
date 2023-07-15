import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { Form } from 'semantic-ui-react'

const DiscEdit = ({ handleUpdateDisc, disc, setEditing }) => {

  const [dForm, setDForm] = useState({
    make: disc.make,
    model: disc.model,
    type: disc.type,
    color: disc.color,
    weight: parseInt(disc.weight),
    img: disc.img
  })

  const { setOpen, setErrorMessages } = useContext(UserContext)

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value
    setDForm({
      ...dForm,
      [key]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/api/discs/${disc.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        make: dForm.make,
        model: dForm.model,
        disc_type: dForm.type,
        color: dForm.color,
        weight: dForm.weight,
        img: dForm.img
      })
    })
    .then(r => r.json())
    .then(d => {
      if (d.error) {
        setErrorMessages(d.error)
        setOpen(true)
    } else {
        handleUpdateDisc(d)
        setDForm({
          make: "",
          model: "",
          type: "",
          color: "",
          weight: "",
          img: ""
        })
        setEditing(false)
      }
    })
  }

  return (
    <div id="discForm">
      Currently editing: <b>{disc.color} {disc.model}</b>
      <br/>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field id="make" value={dForm.make} placeholder='Make' control='input'  onChange={handleChange} />
          <Form.Field id="model" value={dForm.model} placeholder='Model' control='input'  onChange={handleChange} />
          <Form.Field id="color" value={dForm.color} placeholder='Color' control='input'  onChange={handleChange} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field id="type" value={dForm.type} control='select' onChange={handleChange} >
            <option value="">Select disc type</option>
            <option value="Distance Driver">Distance Driver</option>
            <option value="Fairway Driver">Fairway Driver</option>
            <option value="Control Driver">Control Driver</option>
            <option value="Midrange">Midrange</option>
            <option value="Putter">Putter</option>
          </Form.Field>
          <Form.Field id="weight" value={dForm.weight} placeholder='Weight in Grams' control='input'  onChange={handleChange} />
          <Form.Field id="img" value={dForm.img} placeholder='Image URL (Optional)' control='input'  onChange={handleChange} />
        </Form.Group>
        <input type="submit" />
      </Form>
    </div>
  )
}

export default DiscEdit