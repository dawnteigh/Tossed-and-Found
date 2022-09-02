import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const CourseForm = ({ handleAddCourse }) => {

  const [cForm, setCForm] = useState({
    name: "",
    location: "",
    holes: ""
  })

  const { setOpen, setErrorMessages } = useContext(UserContext)

  const handleChange = (e) => {
    const key = e.target.id
    const value = key === "holes" ? parseInt(e.target.value) : e.target.value
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
        location: cForm.location,
        holes: cForm.holes
      })
    })
    .then(r => r.json())
    .then(c => {
      if (c.error) {
          setErrorMessages(c.error)
          setOpen(true)
      } else { 
      handleAddCourse(c)
      setCForm({
        name: "",
        location: "",
        holes: ""
      })
    }
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
            type="number"
            id="holes"
            value={cForm.holes}
            placeholder="Number of Holes"
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