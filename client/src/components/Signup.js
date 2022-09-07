import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'
import { Form } from 'semantic-ui-react';

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
    <div className="userForm">
      <Form onSubmit={handleSubmit}>
      <Form.Input
        type="text"
        label="Username" 
        placeholder="Username"
        id="username"
        value={signup.username}
        onChange={handleChange}
        />
      <Form.Input
        type="password"
        label="Password" 
        placeholder="Password"
        id="password"
        value={signup.password}
        onChange={handleChange}
      />
      <Form.Input
        type="password"
        label="Confirm Password" 
        placeholder="Confirm Password"
        id="password_confirmation"
        value={signup.password_confirmation}
        onChange={handleChange}
      />
      <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default Signup