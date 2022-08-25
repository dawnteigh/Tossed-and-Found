import React, { useState, useEffect } from 'react'
import Course from './Course'
import CourseForm from './CourseForm'

const Courses = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('/courses')
    .then(r => r.json())
    .then(data => setCourses(data))
  }, [])

  const displayCourses = courses.map(c => {
    return (
      <li key={c.id} >
        <b>{c.name}</b>
        <br/>
        {c.holes} Holes
        <br/>
        <i>{c.location}</i>
      </li>
    )
  })

  const handleAddCourse = (c) => {
    setCourses([...courses, c])
  }

  return (
    <div>
      <ul>
      {displayCourses}
      </ul>
      <br/>
      <CourseForm handleAddCourse={ handleAddCourse }/>
    </div>
  )
}

export default Courses