import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/user'
import ScoreForm from '../components/ScoreForm'
import { Card } from 'semantic-ui-react'

const ScoreCard = () => {

  const { selectedCourse, history, user, setOpen, setErrorMessages } = useContext(UserContext)
  const { id, name, holes } = selectedCourse
  const [holesArray, setHolesArray] = useState([])
  const [par, setPar] = useState(0)
  const [strokes, setStrokes] = useState(0)
  const [holeCount, setHoleCount] = useState(0)
  
  
  useEffect(() => {
    if (!selectedCourse) {
      history.push('/courses')
    } else {
      setHolesArray(Array.from({length: holes}, (_, i) => i + 1))
    }
  }, [])

  const tally = (p, s) => {
    if (Number.isInteger(p, s)) {
      setPar(par + p)
      setStrokes(strokes + s)
    } else {
        setErrorMessages(["Par must be an integer", "Strokes must be an integer"])
        setOpen(true)
      }
  }

  const scoreForms = holesArray.map(h => <ScoreForm key={h} hole={h} tally={tally} count={holeCount} setCount={setHoleCount} />)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (holeCount < holes) {
      setErrorMessages(["Your scorecard is incomplete! Go back and make sure each hole has a recorded score."])
      setOpen(true)
    } else {
      fetch('/scores', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          course_id: id,
          par: par,
          strokes: strokes,
          player: user.username
        })
      })
      .then(r => r.json())
      .then(r => {
        if (r.error) {
          setErrorMessages(r.error)
          setOpen(true)
        } else {
            history.push('/')
          }
      })
    }
  }

  return (
    <div>
      <h3>Currently playing at: {name}</h3><br/>
      <b>Par:</b> {par} <b>Strokes:</b> {strokes}
      <br/><br/>
      <Card.Group id="formGrid" itemsPerRow={3} >
        {scoreForms}
      </Card.Group>
        <br/>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Finished!" />
      </form>
    </div>
  )
}

export default ScoreCard