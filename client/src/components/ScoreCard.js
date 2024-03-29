import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/user'
import ScoreForm from '../components/ScoreForm'
import { Card } from 'semantic-ui-react'

const ScoreCard = () => {

  const { selectedCourse, history, user, setUser, setOpen, setErrorMessages } = useContext(UserContext)
  const { id, name, holes } = selectedCourse
  const [holesArray, setHolesArray] = useState([])
  const [par, setPar] = useState(0)
  const [strokes, setStrokes] = useState(0)
  const [holeCount, setHoleCount] = useState(0)

  useEffect(() => {
    if (!selectedCourse) {
      history.push('/courses')
    } else {
      setHolesArray(Array.from({ length: holes }, (_, i) => i + 1))
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

  const handleAddScore = (s) => {
    setUser({
      ...user,
      scores: [...user.scores, s],
      courses: [...user.courses, s.course]
    })
  }

  const scoreForms = holesArray.map(h => <ScoreForm key={h} hole={h} tally={tally} count={holeCount} setCount={setHoleCount} />)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (holeCount < holes) {
      setErrorMessages(["Your scorecard is incomplete! Go back and make sure each hole has a recorded score."])
      setOpen(true)
    } else {
      fetch('/api/scores', {
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
        .then(score => {
          if (score.error) {
            setErrorMessages(score.error)
            setOpen(true)
          } else {
            handleAddScore(score)
            history.push('/')
          }
        })
    }
  }

  return (
    <div>
      <h3>Currently playing at: {name}</h3><br />
      Enter the par and your number of strokes for each hole. Use the +/- buttons to add or remove the numbers from your total!<br />
      <b>Par:</b> {par} <b>Strokes:</b> {strokes}
      <br /><br />
      <Card.Group id="form-grid" itemsPerRow={3} >
        {scoreForms}
      </Card.Group>
      <br />
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Finished!" />
      </form>
    </div>
  )
}

export default ScoreCard