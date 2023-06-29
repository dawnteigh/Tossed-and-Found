import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { Card, Table } from 'semantic-ui-react'

const Course = ({ course, setEditMode, edit }) => {

  const { setSelectedCourse, history } = useContext(UserContext)

  const { id, name, location, holes, top_scores } = course

  const handleClick = () => {
    setSelectedCourse(course)
    history.push('/scorecard')
  }

  const handleEditMode = () => {
    if (edit === id) {
      setSelectedCourse(false)
      setEditMode(false)
    }
    else {
      setSelectedCourse(course)
      setEditMode(id)
    }
  }

  const topScores = top_scores.map(s => {
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
      <Table.Row key={s.id} >
        <Table.Cell>{s.player}</Table.Cell>
        <Table.Cell>{s.strokes}</Table.Cell>
        <Table.Cell>{modifiedScore(score)}</Table.Cell>
      </Table.Row>
    )
  })

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          {location} | {holes} holes<br/>
          <button onClick={handleClick}>Play</button>
          <button onClick={handleEditMode}>{edit === id ? "Cancel" : "Edit"}</button>
        </Card.Meta>
        <Card.Description>
          <b>Top 3 Scores</b><br/>
          <Table singleLine unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Player</Table.HeaderCell>
                <Table.HeaderCell>Strokes</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {topScores}
            </Table.Body>
          </Table>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Course