import React, { useContext } from 'react'
import { UserContext } from './context/user';
import Messages from './Messages';
//TODO: User homepage will render links for Messages, Discs, and Scores. Maybe even Courses that they've played at.
const Home = () => {
  const { user, loggedIn } = useContext(UserContext);

  if (!loggedIn) {
    return (
      <h3>Log in, bro</h3>
    )
  }
  return (
    <div>
      Hey, {user.username}!
    <br/>
    <Messages />
    </div>
  )
}

export default Home