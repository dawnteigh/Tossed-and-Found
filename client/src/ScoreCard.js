import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/user'
import ScoreForm from './ScoreForm'
import { Container } from 'semantic-ui-react'

const ScoreCard = () => {

  const { selectedCourse, history } = useContext(UserContext)
  const { id, name, holes } = selectedCourse
  const [holesArray, setHolesArray] = useState([])
  const [par, setPar] = useState(0)
  const [strokes, setStrokes] = useState(0)
  
  
  useEffect(() => {
    if (!selectedCourse) {
      history.push('/courses')
    } else {
      setHolesArray(Array.from({length: holes}, (_, i) => i + 1))
    }
  }, [])

  const tally = (p, s) => {
    setPar(par + p)
    setStrokes(strokes + s)
  }

  const scoreForms = holesArray.map(h => <ScoreForm key={h} hole={h} tally={tally} />)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/scores', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        course_id: id,
        par: par,
        strokes: strokes
      })
    })
    .then(r => r.json())
    .then(() => history.push('/scores'))
  }

  return (
    <div>
      <h3>Currently playing at: {name}</h3><br/>
      <b>Par:</b> {par} <b>Strokes:</b> {strokes}
      <Container id="formGrid">
        {scoreForms}
      </Container>
        <br/>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Finished!" />
      </form>
    </div>
  )
}

export default ScoreCard