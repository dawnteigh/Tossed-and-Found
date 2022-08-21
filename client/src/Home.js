import React, { useContext } from 'react'
import { UserContext } from './context/user';
import Messages from './Messages';

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