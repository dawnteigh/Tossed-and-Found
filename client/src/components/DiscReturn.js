import React, { useState, useContext } from 'react'
import { UserContext } from '../context/user'

const DiscReturn = ({ setActiveIndex, msgForm, setMsgForm }) => {
  const { setOpen, setErrorMessages } = useContext(UserContext)
  const [search, setSearch] = useState("")
  const [foundDisc, setFoundDisc] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/found", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: search.toLowerCase()
      })
    })
    .then(r => r.json())
    .then(data => {
      if (data.error) {
        setErrorMessages(data.error)
        setOpen(true)
      } else {
      setFoundDisc(data)
      setSearch("")
      }
    })
  }

  const handleMsg = () => {
    setMsgForm({...msgForm,
      subject: `${foundDisc.color} ${foundDisc.model}`,
      to: foundDisc.user.username
    })
    setActiveIndex("0")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          size="36"
          value={search}
          placeholder="Type in the 6 character ID written on the disc"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br/>
        <input type="submit" />
      </form>
      <br/>
      {foundDisc ? 
      <div>
        <img src={foundDisc.img} alt="Disc associated with given ID" width="200px" height="auto" /><br/>
        <b>{foundDisc.color} {foundDisc.make} {foundDisc.model}</b><br/>
        This disc belongs to {foundDisc.user.username}. Send them a message to let them know you've found it!
        <br/>
        <button onClick={handleMsg}>Message {foundDisc.user.username}</button>
      </div> :
       null}
    </div>
  )
}

export default DiscReturn