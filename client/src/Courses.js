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
    return <Course course={c} key={c.id} />
  })

  const handleAddCourse = (c) => {
    setCourses([...courses, c])
  }

  return (
    <div>
      <h4>Click on a course to start scorekeeping a new round there!</h4>
      {displayCourses}
      <br/>
      <CourseForm handleAddCourse={ handleAddCourse }/>
    </div>
  )
}

export default Courses