import React, { useState } from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'

const ScoreForm = ({ hole, tally, count, setCount }) => {

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
      setCount(count + 1)
    }
    else if (e.target.id === 'undo') {
      tally(-score.par, -score.strokes)
      setIcon({
        img: 'circle outline',
        color: 'red'
      })
      setCount(count - 1)
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
            <br />
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
          {/* TODO: Only the edges of the buttons are clickable, presumably because of icons */}
          <Button icon id='record' compact color='green' onClick={handleClick} disabled={icon.color === 'green' ? true : false} >
            <Icon id='record' name='plus' />
          </Button>
          <Button icon id='undo' compact color='red' onClick={handleClick} disabled={icon.color === 'red' ? true : false} >
            <Icon id='undo' name='minus' />
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default ScoreForm