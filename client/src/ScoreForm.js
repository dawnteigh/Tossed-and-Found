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
      <input
          type="number"
          id="par"
          value={score.par}
          placeholder="Par"
          onChange={handleChange}
        />
        <br/>
        <input
          type="number"
          id="strokes"
          value={score.strokes}
          placeholder="Strokes"
          onChange={handleChange}
        />
      </form>
      <button onClick={() => tally(score.par, score.strokes)}>Record</button>
      {" "}
      <button onClick={() => tally(-score.par, -score.strokes)}>Undo</button>
    </div>
  )
}

export default ScoreForm