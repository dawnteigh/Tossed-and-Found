import React, { useContext } from 'react'
import { UserContext } from './context/user';
import { Table } from 'semantic-ui-react'

const Course = ({ course }) => {

  const { setSelectedCourse, history } = useContext(UserContext)

  const { name, location, holes, top_scores } = course

  const handleClick = () => {
    setSelectedCourse(course)
    history.push('/scorecard')
  }

  const topScores = top_scores.map(s => {
    return (
      <Table.Row>
        <Table.Cell>{s.player}</Table.Cell>
        <Table.Cell>{s.strokes}</Table.Cell>
        <Table.Cell>{(s.strokes - s.par) >= 0 ? "+" + (s.strokes - s.par) : (s.strokes - s.par)}</Table.Cell>
      </Table.Row>
    )
  })

  return (
    <div onClick={handleClick} >
      <b>{name}</b> | {holes} Holes<br/>
      <i>{location}</i><br/>
    <Table singleLine>
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
      <br/><br/>
    </div>
  )
}

export default Course