import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const Signup = () => {

  const { login } = useContext(UserContext);

  const [signup, setSignup] = useState({
    username: "",
    password: "",
    password_confirmation: ""
  })

  const [errors, setErrors] = useState([])

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
      if (!user.errors) {
      login(user)
      } else {
        const errorLis = user.errors.map(e => <li>{e}</li>)
        setErrors(errorLis)
        e.target.reset()
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          id="username"
          value={signup.username}
          onChange={handleChange}
        />
        <br/>
        <label>Password: </label>
        <input
          type="password"
          id="password"
          value={signup.password}
          onChange={handleChange}
        />
        <br/>
        <label>Confirm Password: </label>
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
      <ul>
        {errors}
      </ul>
    </div>
  )
}

export default Signup