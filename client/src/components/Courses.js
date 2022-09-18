import React, { useState, useEffect, useContext } from 'react'
import Course from '../components/Course'
import CourseForm from '../components/CourseForm'
import { Card } from 'semantic-ui-react'
import { UserContext } from '../context/user'

const Courses = () => {

  const [courses, setCourses] = useState([])

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
    }})
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
      <Card.Group itemsPerRow={1} id="courseGrid">
        {displayCourses}
      </Card.Group>
      <br/>
      <CourseForm handleAddCourse={ handleAddCourse }/>
    </div>
  )
}

export default Courses