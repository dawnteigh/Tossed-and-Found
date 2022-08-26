import React, { useContext } from 'react'
import { UserContext } from './context/user';

const Course = ({ course }) => {

  const { setSelectedCourse, history } = useContext(UserContext)

  const { name, location, holes } = course

  const handleClick = () => {
    setSelectedCourse(course)
    history.push('/scorecard')
  }

  return (
    <div onClick={handleClick} >
      <b>{name}</b> | {holes} Holes<br/>
      <i>{location}</i>
      <br/><br/>
    </div>
  )
}

export default Course