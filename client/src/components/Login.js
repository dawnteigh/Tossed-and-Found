import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'

const Login = () => {

  const { login, setOpen, setErrorMessages } = useContext(UserContext);

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: username,
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
    <div>
      <form onSubmit={handleSubmit}>
        <label><b>Username:</b></label>
        <br/>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label><b>Password:</b></label>
        <br/>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <input type="submit" />
        </form>
        <br/>
    </div>
  )
}

export default Login