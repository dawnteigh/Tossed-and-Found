import React, { useState } from 'react'

const CourseForm = ({ handleAddCourse }) => {

  const [cForm, setCForm] = useState({
    name: "",
    location: "",
  })

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value
    setCForm({
      ...cForm,
      [key]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/courses', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: cForm.name,
        location: cForm.location
      })
    })
    .then(r => r.json())
    .then(c => { 
      handleAddCourse(c)
      setCForm({
        name: "",
        location: ""
      })
    })
  }

  return (
    <div>
      Add new course:
      <br/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={cForm.name}
          placeholder="Name of Course"
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          id="location"
          value={cForm.location}
          placeholder="Location of Course"
          onChange={handleChange}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default CourseForm