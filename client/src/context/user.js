import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { dataArrays } from '../dataArrays';

const UserContext = React.createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(false)
  const [open, setOpen] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])
  const [greeting, setGreeting] = useState("")

  const history = useHistory();

  const randomImg = dataArrays.imgs[Math.floor(Math.random() * dataArrays.imgs.length)];
  const randomGreeting = dataArrays.greetings[Math.floor(Math.random() * dataArrays.greetings.length)];

  useEffect(() => {
    fetch("/api/me")
      .then(r => r.json())
      .then(data => {
        if (data.error) {
          setLoggedIn(false)
          history.push("/")
        }
        else {
          setUser(data)
          setLoggedIn(true)
          setGreeting(randomGreeting)
        }
      })
  }, [])

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
    setGreeting(randomGreeting)
    history.push("/")
  }

  const logout = () => {
    fetch('/api/logout', {
      method: "DELETE"
    })
      .then(() => {
        setLoggedIn(false)
        history.push('/login')
        setSelectedCourse(false)
        setUser(null)
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
        history,
        randomImg,
        greeting
      }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }