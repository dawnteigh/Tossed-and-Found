import React, { useContext } from 'react'
import { UserContext } from './context/user';
import { NavLink } from "react-router-dom";


const NavBar = () => {
  const { loggedIn, logout } = useContext(UserContext);

 if (!loggedIn) {
  return (
    <div>
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
    <div>
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