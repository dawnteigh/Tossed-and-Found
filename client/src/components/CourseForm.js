import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { Input } from 'semantic-ui-react'

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
    fetch('/api/courses', {
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
        <Input
          type="text"
          id="name"
          label="Name"
          value={cForm.name}
          placeholder="Name of Course"
          onChange={handleChange}
        />
          <Input
            type="number"
            id="holes"
            label="Holes"
            value={cForm.holes}
            placeholder="Number of Holes"
            onChange={handleChange}
          />
        <Input
          type="text"
          id="location"
          label="Location"
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