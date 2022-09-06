import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { dataArrays } from '../dataArrays';
import { NavLink } from "react-router-dom";


const NavBar = () => {
  const { loggedIn, logout, user } = useContext(UserContext);
  const randomGreeting = dataArrays.greetings[Math.floor(Math.random() * dataArrays.greetings.length)];

 if (!loggedIn) {
  return (
    <div className='navBar'>
      <NavLink
        className="navTab"
        to="/login"
        exact
      >
        Log In
      </NavLink>
      <NavLink
        className="navTab"
        to="/signup"
        exact
      >
        Sign Up
      </NavLink>
    </div>
  )
 }
  return (
    <div className='navBar'>
      <span className="greeting">{randomGreeting}<b>{user.username}!</b></span>
      <NavLink
        className="navTab"
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        className="navTab"
        to="/discs"
        exact
      >
        Discs
      </NavLink>
      <NavLink
        className="navTab"
        to="/courses"
        exact
      >
        Courses
      </NavLink>
      <NavLink
        className="navTab"
        to="/scorecard"
        exact
      >
        Scorecard
      </NavLink>
      <button className="logout" onClick={logout}>Logout 🡺</button>
    </div>
  )
}

export default NavBar