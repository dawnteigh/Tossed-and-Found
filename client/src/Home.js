import React, { useContext } from 'react'
import { UserContext } from './context/user';
import Messages from './Messages';

const Home = () => {
  const { loggedIn } = useContext(UserContext);

  if (!loggedIn) {
    return (
      <h3>Log in, bro</h3>
    )
  }
  return (
    <div>Home</div>
  )
}

export default Home