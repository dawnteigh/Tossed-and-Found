import React, { useState } from 'react'

const ScoreForm = ({ hole, tally }) => {

  const [score, setScore] = useState({
    par: "",
    strokes: ""
  })

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value
    setScore({
      ...score,
      [key]: parseInt(value)
    })
  }

  return (
    <div>
      <form>
      <h4>Hole {hole}</h4>
      <label>Par: </label>
      <input
          type="number"
          id="par"
          value={score.par}
          onChange={handleChange}
        />
        <br/>
        <label>Strokes: </label>
        <input
          type="number"
          id="strokes"
          value={score.strokes}
          onChange={handleChange}
        />
      </form>
      <button onClick={() => tally(score.par, score.strokes)}>Record</button>
      <button onClick={() => tally(-score.par, -score.strokes)}>Undo</button>
    </div>
  )
}

export default ScoreForm