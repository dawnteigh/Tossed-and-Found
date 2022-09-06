import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'

const Signup = () => {

  const { login, setOpen, setErrorMessages } = useContext(UserContext);

  const [signup, setSignup] = useState({
    username: "",
    password: "",
    password_confirmation: ""
  })

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value
    setSignup({
      ...signup,
      [key]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: signup.username,
        password: signup.password,
        password_confirmation: signup.password_confirmation
      })
    })
    .then(r => r.json())
    .then(user => {
      if (user.error) {
        setErrorMessages(user.error)
        setOpen(true)
      } else {
          login(user)
        }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label><b>Username:</b></label>
        <br/>
        <input
          type="text"
          id="username"
          value={signup.username}
          onChange={handleChange}
        />
        <br/>
        <label><b>Password:</b></label>
        <br/>
        <input
          type="password"
          id="password"
          value={signup.password}
          onChange={handleChange}
        />
        <br/>
        <label><b>Confirm Password:</b></label>
        <br/>
        <input
          type="password"
          id="password_confirmation"
          value={signup.password_confirmation}
          onChange={handleChange}
        />
        <br/>
        <input type="submit" />
      </form>
      <br/><br/>
    </div>
  )
}

export default Signup