import React, { useState } from 'react'

const ScoreForm = ({ hole, tally }) => {

  const [score, setScore] = useState({
    par: 0,
    strokes: 0
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
          placeholder="Strokes"
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