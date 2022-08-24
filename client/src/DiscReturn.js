import React, { useState } from 'react'
import MessageForm from './MessageForm'

const DiscReturn = () => {

  const [search, setSearch] = useState("")
  const [foundDisc, setFoundDisc] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/found", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: search
      })
    })
    .then(r => r.json())
    .then(data => setFoundDisc(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={search}
          placeholder="Type in the 6 character key written on the disc"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default DiscReturn