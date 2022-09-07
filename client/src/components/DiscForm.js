import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { Form } from 'semantic-ui-react'

const DiscForm = ({ handleAddDisc }) => {

  const [dForm, setDForm] = useState({
    make: "",
    model: "",
    type: "",
    color: "",
    weight: "",
    img: ""
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
    fetch('/discs', {
      method: "POST",
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
        handleAddDisc(d)
        setDForm({
          make: "",
          model: "",
          type: "",
          color: "",
          weight: "",
          img: ""
        })
      }
    })
  }

  return (
    <div id="discForm">
      Add new disc:
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
      {/* <form onSubmit={handleSubmit}>
        <select id="type" onChange={handleChange} value={dForm.type} >
          <option value="">Select disc type</option>
          <option value="Distance Driver">Distance Driver</option>
          <option value="Fairway Driver">Fairway Driver</option>
          <option value="Control Driver">Control Driver</option>
          <option value="Midrange">Midrange</option>
          <option value="Putter">Putter</option>
        </select>
        <br/>
        <input
          type="text"
          id="make"
          value={dForm.make}
          placeholder="Make"
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          id="model"
          value={dForm.model}
          placeholder="Model"
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          id="color"
          value={dForm.color}
          placeholder="Color"
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          id="weight"
          value={dForm.weight}
          placeholder="Weight in grams"
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          id="img"
          value={dForm.img}
          placeholder="Image URL (optional)"
          onChange={handleChange}
        />
        <br/>
        <input type="submit" />
      </form> */}
    </div>
  )
}

export default DiscForm