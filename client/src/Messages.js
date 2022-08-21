import React, { useContext, useState, useEffect } from 'react'
import MessageForm from './MessageForm'
import Moment from 'moment'
import { UserContext } from './context/user'
// TODO: CREATE A MESSAGE COMPONENT TO RENDER PRETTIER MESSAGE CARDS
const Messages = () => {
  const { user } = useContext(UserContext)
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/messages")
    .then(r => r.json())
    .then(data => setMessages(data))
  }, [])

  const displayMessages = messages.map(m => {
    return (
      <div>
        <b>{m.subject}</b> | to: { m.to === user.username ? "me" : m.to}
        <br/>
          {m.body}
          <br/>
          <i>--{m.user.username === user.username ? "me" : m.user.username}
          <br/>
          {Moment(m.created_at).format('MMMM DD,  LT')}</i>
          <br/><br/>
      </div>
    )
  })

  return (
    <div>
      Here are your messages: 
      <br/>
      {displayMessages}
      <MessageForm />
    </div>
  )
}

export default Messages