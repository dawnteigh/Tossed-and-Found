import React, { useContext } from 'react'
import { Item } from 'semantic-ui-react'
import Moment from 'moment'
import { UserContext } from '../context/user'

const Scores = () => {

  const { user, setUser } = useContext(UserContext)

  const handleDelete = (e) => {
    fetch(`/api/scores/${e.target.id}`, {
      method: "DELETE"
    })
    const updatedScores = user.scores.filter(s => s.id !== parseInt(e.target.id))
    setUser({
      ...user,
      scores: updatedScores
    })
  }

  const displayScores = user.scores.map(s => {
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
            Par: {s.par}<br />
            Your Strokes: {s.strokes}
          </Item.Description>
          <Item.Extra><button id={s.id} className='delete' onClick={handleDelete} >Delete</button></Item.Extra>
        </Item.Content>
      </Item>
    )
  })

  return (
    <Item.Group divided>
      {user.scores.length === 0 ? "You have no scores to speak of. Get out there and play!" : displayScores}
    </Item.Group>
  )
}

export default Scores