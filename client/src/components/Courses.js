import React, { useState, useEffect, useContext } from 'react'
import Course from '../components/Course'
import CourseForm from '../components/CourseForm'
import { Card } from 'semantic-ui-react'
import { UserContext } from '../context/user'
import CourseEditForm from './CourseEditForm'

const Courses = () => {

  const [courses, setCourses] = useState([])
  const [editMode, setEditMode] = useState(false)

  const { setOpen, setErrorMessages } = useContext(UserContext)

  useEffect(() => {
    fetch('/api/courses')
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          setErrorMessages(data.error)
          setOpen(true)
        } else {
          setCourses(data)
        }
      })
  }, [])

  const displayCourses = courses.map(c => {
    return <Course course={c} key={c.id} setEditMode={setEditMode} edit={editMode} />
  })

  const handleAddCourse = (c) => {
    setCourses([...courses, c])
  }

  const handleUpdateCourse = (updatedCourse) => {
    const updatedCourses = courses.map(c => {
      if (c.id === updatedCourse.id) {
        return updatedCourse;
      } else {
        return c;
      }
    })
    setCourses(updatedCourses)
  }

  return (
    <div>
      <h4>Click 'Play' on a course to start scorekeeping a new round there!</h4>
      <Card.Group itemsPerRow={1} id="course-grid">
        {displayCourses}
      </Card.Group>
      <br />
      {editMode ?
        <CourseEditForm handleUpdateCourse={handleUpdateCourse} setEditMode={setEditMode} /> :
        <CourseForm handleAddCourse={handleAddCourse} />
      }
    </div>
  )
}

export default Courses