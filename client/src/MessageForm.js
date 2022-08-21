import React, { useContext } from 'react'
import { UserContext } from './context/user'

const MessageForm = ({ handleAddMessage }) => {

  const { msgForm, setMsgForm } = useContext(UserContext);

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value
    setMsgForm({
      ...msgForm,
      [key]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/messages', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subject: msgForm.subject,
        to: msgForm.to,
        body: msgForm.body
      })
    })
    .then(r => r.json())
    .then(msg => { 
      handleAddMessage(msg)
      setMsgForm({
        subject: "",
        to: "",
        body: ""
      })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Subject: </label>
      <input
        type="text"
        id="subject"
        value={msgForm.subject}
        onChange={handleChange}
      />
      <br/>
      <label>To: </label>
      <input
        type="text"
        id="to"
        value={msgForm.to}
        onChange={handleChange}
      />
      <br/>
      <label>Message: </label>
      <textarea
        id="body"
        value={msgForm.body}
        onChange={handleChange}
      />
      <br/>
      <input type="submit" />
    </form>
  )
}

export default MessageForm