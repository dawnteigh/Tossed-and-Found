import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import { Segment } from 'semantic-ui-react'

const MyCourses = () => {

  const { user, history, setSelectedCourse } = useContext(UserContext)

  const displayCourses = user.courses.map(c => {
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
      <Segment key={c.id} onClick={handleClick} className="myCourse" raised>
        <b>{c.name}</b> in {c.location}
        <br/>
        <i>Personal Best</i>: {modifiedScore(c.best)}  
      </Segment>
    )
  })

  return (
    <div>
      <h4>
        A list of the courses you have played at.
        <br/>
        Click on one to start scorekeeping a new round!
      </h4>
      {displayCourses}
    </div>
  )
}

export default MyCourses