import React, { useState } from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'

const ScoreForm = ({ hole, tally }) => {

  const [score, setScore] = useState({
    par: "",
    strokes: ""
  })
  const [icon, setIcon] = useState({
    img: 'circle outline',
    color: 'red'
  })

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value
    setScore({
      ...score,
      [key]: parseInt(value)
    })
  }

  const handleClick = (e) => {
    // TODO: find a better way to do this
    if (!Number.isInteger(score.par, score.strokes)) {
      tally("error", "message")
    }
    else if (e.target.id === 'record') {
      tally(score.par, score.strokes)
      setIcon({
        img: 'check circle outline',
        color: 'green'
      }) 
    }
    else if (e.target.id === 'undo') {
      tally(-score.par, -score.strokes)
      setIcon({
        img: 'circle outline',
        color: 'red'
      })
    }
  }

  return (
    <Card color='orange' raised >
      <Card.Content>
        <Card.Header>
          Hole {hole} <Icon name={icon.img} color={icon.color} />
        </Card.Header>
        <Card.Description>
          <form>
            <input
            type="number"
            id="par"
            style={{ width: "75%" }}
            value={score.par}
            placeholder="Par"
            onChange={handleChange}
            />
          <br/>
            <input
            type="number"
            id="strokes"
            style={{ width: "75%" }}
            value={score.strokes}
            placeholder="Strokes"
            onChange={handleChange}
            />
          </form>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button id='record' basic color='green' onClick={handleClick} disabled={ icon.color === 'green' ? true : false } >
            Record
          </Button>
          <Button id='undo' basic color='red' onClick={handleClick} disabled={ icon.color === 'red' ? true : false } >
            Undo
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ScoreForm