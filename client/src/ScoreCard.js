import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/user'

const ScoreCard = () => {

  const { selectedCourse, history } = useContext(UserContext)
  const { id, name, location, holes } = selectedCourse
  const [holesArray, setHolesArray] = useState([])
  
  useEffect(() => {
    if (!selectedCourse) {
      history.push('/courses')
    } else {
      setHolesArray(Array.from({length: holes}, (_, i) => i + 1))
    }
  }, [])

  // TODO: create a form for each value in holesArray


  return (
    <div>
      <h3>Currently playing at: {name}</h3>
    </div>
  )
}

export default ScoreCard