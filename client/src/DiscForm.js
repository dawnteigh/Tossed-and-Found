import React, { useState } from 'react'

const DisdForm = ({ handleAddDisc }) => {
  const [dForm, setDForm] = useState({
    make: "",
    model: "",
    type: "",
    color: "",
    weight: "",
    img: ""
  })

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
      handleAddDisc(d)
      setDForm({
        make: "",
        model: "",
        type: "",
        color: "",
        weight: "",
        img: ""
      })
    })
  }

  return (
    <div>
      Add new disc:
      <br/>
      <form onSubmit={handleSubmit}>
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
          id="type"
          value={dForm.type}
          placeholder="Type of disc"
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
          placeholder="Image URL"
          onChange={handleChange}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default DisdForm