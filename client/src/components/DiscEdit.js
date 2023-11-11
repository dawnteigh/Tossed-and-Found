import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { Form } from 'semantic-ui-react'

const DiscEdit = ({ handleUpdateDisc, disc, setEditing }) => {

  const [form, setForm] = useState({
    make: disc.make,
    model: disc.model,
    type: disc.type,
    color: disc.color,
    weight: parseInt(disc.weight)
  })

  const { setOpen, setErrorMessages } = useContext(UserContext)

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value
    setForm({
      ...form,
      [key]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData();

    data.append("disc[make]", form.make);
    data.append("disc[model]", form.model);
    data.append("disc[disc_type]", form.type);
    data.append("disc[color]", form.color);
    data.append("disc[weight]", form.weight);
    if (e.target.image.files[0]) data.append("disc[image]", e.target.image.files[0]);

    sendRequest(data)
  }

  function sendRequest(data) {
    fetch(`/api/discs/${disc.id}`, {
      method: "PATCH",
      body: data
    })
      .then(r => r.json())
      .then(d => {
        if (d.error) {
          setErrorMessages(d.error)
          setOpen(true)
        } else {
          handleUpdateDisc(d)
          setForm({
            make: "",
            model: "",
            type: "",
            color: "",
            weight: ""
          })
          setEditing(false)
        }
      })
  }

  return (
    <div id="discForm">
      Currently editing: <b>{disc.color} {disc.model}</b>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field id="make" value={form.make} placeholder='Make' control='input' onChange={handleChange} />
          <Form.Field id="model" value={form.model} placeholder='Model' control='input' onChange={handleChange} />
          <Form.Field id="color" value={form.color} placeholder='Color' control='input' onChange={handleChange} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field id="type" value={form.type} control='select' onChange={handleChange} >
            <option value="">Select disc type</option>
            <option value="Distance Driver">Distance Driver</option>
            <option value="Fairway Driver">Fairway Driver</option>
            <option value="Control Driver">Control Driver</option>
            <option value="Midrange">Midrange</option>
            <option value="Putter">Putter</option>
          </Form.Field>
          <Form.Field id="weight" value={form.weight} placeholder='Weight in Grams' control='input' onChange={handleChange} />
          <input type="file" accept="image/png, image/jpeg, image/jpg" name="image" id="image" aria-label="image" />
        </Form.Group>
        <input type="submit" />
      </Form>
    </div>
  )
}

export default DiscEdit