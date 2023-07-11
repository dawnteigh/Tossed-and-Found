import React, { useContext } from 'react'
import { UserContext } from '../context/user';
import { NavLink } from "react-router-dom";
import { Icon } from 'semantic-ui-react';


const NavBar = () => {
  const { loggedIn, logout, user, greeting } = useContext(UserContext);

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
      <span className="greeting">{greeting}<b>{user.username}!</b></span>
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
      <button className="logout" onClick={logout}>Logout <Icon name="sign-out" /></button>
    </div>
  )
}

export default NavBar