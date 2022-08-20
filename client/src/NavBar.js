import React, { useContext } from 'react'
import { UserContext } from './context/user';
import { NavLink } from "react-router-dom";


const NavBar = () => {
 const { loggedIn } = useContext(UserContext);

 if (!loggedIn) {
  return (
    <div>
      <NavLink
        to="/login"
        exact
      >
        Log In
      </NavLink>
      <NavLink
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
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/discs"
        exact
      >
        Discs
      </NavLink>
      <NavLink
        to="/courses"
        exact
      >
        Courses
      </NavLink>
      <NavLink
        to="/scores"
        exact
      >
        Scores
      </NavLink>
      <NavLink
        to="/found-disc"
        exact
      >
        Found a Disc?
      </NavLink>
    </div>
  )
}

export default NavBar