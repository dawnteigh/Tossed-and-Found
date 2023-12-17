import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { Segment } from 'semantic-ui-react'

const MyCourses = () => {

  const { user, history, setSelectedCourse } = useContext(UserContext)

  const displayCourses = user.courses.map((c, i) => {
    const handleClick = () => {
      setSelectedCourse(c)
      history.push('/scorecard')
    }

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
      <Segment key={i} onClick={handleClick} className="my-course" raised>
        <b>{c.name}</b> in {c.location}
        <br />
        <i>Personal Best</i>: {modifiedScore(c.best)}
      </Segment>
    )
  })

  return (
    <div>
      <h4>
        A list of the courses you have played at.
        <br />
        Click on one to start scorekeeping a new round!
      </h4>
      {user.courses.length === 0 ? "... unless of course you haven't recorded any scores with us yet. Click the courses tab to get started!" : displayCourses}
    </div>
  )
}

export default MyCourses