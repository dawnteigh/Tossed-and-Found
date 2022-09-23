import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const UserContext = React.createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(false)
  const [open, setOpen] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])

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
      setLoggedIn(false)
      history.push('/login')
      setSelectedCourse(false)
      setUser({})
    })
  }

  return (
  <UserContext.Provider
  value={{ 
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    open,
    setOpen,
    errorMessages,
    setErrorMessages,
    selectedCourse,
    setSelectedCourse,
    login,
    logout,
    history
    }}>
    {children}
  </UserContext.Provider>
  )
}

export { UserContext, UserProvider}