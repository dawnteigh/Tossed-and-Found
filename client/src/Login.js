import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'

const Login = () => {

  const { login } = useContext(UserContext);

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

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
      if (!user.error) {
        setError("")
        login(user)
      } else {
        setError(user.error)
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label>Password: </label>
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
        {error}
    </div>
  )
}

export default Login