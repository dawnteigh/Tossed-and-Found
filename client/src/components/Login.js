import React, { useContext, useState } from 'react'
import { Form } from 'semantic-ui-react';
import { UserContext } from '../context/user'

const Login = () => {

  const { login, setOpen, setErrorMessages } = useContext(UserContext);

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: username.toLowerCase(),
        password: password
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
      <span className='subtle'>Demo account - Username: Tim, Password: tim123 </span>
      <Form onSubmit={handleSubmit}>
      <Form.Input
        type="text"
        label="Username" 
        placeholder="Username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      <Form.Input
        type="password"
        label="Password" 
        placeholder="Password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default Login