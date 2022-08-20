import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/me")
    .then(r => r.json())
    .then(data => {
      setUser(data)
      data.error ? setLoggedIn(false) : setLoggedIn(true)
    })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  return
  <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn, login, logout }}>
    {children}
  </UserContext.Provider>
}

export { UserContext, UserProvider}