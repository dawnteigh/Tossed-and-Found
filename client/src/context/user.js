import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const UserContext = React.createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [msgForm, setMsgForm] = useState({
    subject: "",
    to: "",
    body: ""
  })

  const history = useHistory();

  useEffect(() => {
      fetch("/me")
      .then(r => r.json())
      .then(data => {
        if (data.error) {
        setLoggedIn(false)
        history.push("/")
        } else {
          setUser(data)
          setLoggedIn(true)
        }
      })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
    history.push("/")
  }

  const logout = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(() => {
      setUser({})
      setLoggedIn(false)
      history.push('/login')
    })
  }

  return (
  <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn, msgForm, setMsgForm, login, logout, history }}>
    {children}
  </UserContext.Provider>
  )
}

export { UserContext, UserProvider}