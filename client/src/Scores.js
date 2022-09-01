import React, { useState, useEffect } from 'react'
import { Item } from 'semantic-ui-react'
import Moment from 'moment'

const Scores = () => {

  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('/scores')
    .then(r => r.json())
    .then(s => setScores(s))
  }, [])

  const handleDelete = (e) => {
    fetch(`/scores/${e.target.id}`, {
      method: "DELETE"
    })
    const updatedScores = scores.filter(s => s.id !== parseInt(e.target.id))
    setScores(updatedScores)
  }

  const displayScores = scores.map(s => {
    const score = s.strokes - s.par
    const modifiedScore = (s) => {
      if (s === 0) {
        return `±${s}`
      } 
      else if (s > 0) {
        return `+${s}`
      } else {
        return s
      }
    }
    return (
      <Item key={s.id}>
        <Item.Image size='mini' floated='right'><span className="score">{modifiedScore(score)}</span></Item.Image>
        <Item.Content>
          <Item.Header>{s.course.name}</Item.Header>
          <Item.Meta>{Moment(s.created_at).format('MMMM DD,  LT')}</Item.Meta>
          <Item.Description>
            Par: {s.par}<br/>
            Your Strokes: {s.strokes}
          </Item.Description>
          <Item.Extra><button id={s.id} className='delete' onClick={handleDelete} >Delete</button></Item.Extra>
        </Item.Content>
      </Item>   
    )
  })

  return (
    <Item.Group divided>
      {displayScores}
    </Item.Group>
  )
}

export default Scores