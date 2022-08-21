import React, { useContext, useState, useEffect } from 'react'
import MessageForm from './MessageForm'
import Moment from 'moment'
import { UserContext } from './context/user'
// TODO: CREATE A MESSAGE COMPONENT TO RENDER PRETTIER MESSAGE CARDS
const Messages = () => {
  const { user, msgForm, setMsgForm } = useContext(UserContext)
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/messages")
    .then(r => r.json())
    .then(data => setMessages(data))
  }, [])

  const displayMessages = messages.map(m => {
    return (
      <div key={m.id} >
        <b>{m.subject}</b> | to: { m.to === user.username ? "me" : m.to}
        <br/>
        {m.body}
        <br/>
        <i>--{m.user.username === user.username ? "me" : m.user.username}
        <br/>
        {Moment(m.created_at).format('MMMM DD,  LT')}</i>{" "}
        {m.user.username === user.username ? null :
          <button onClick={() =>
          setMsgForm({
            ...msgForm,
            subject: m.subject,
            to: m.user.username
          })
        }>Reply</button>
      }
        <br/><br/>
      </div>
    )
  })

  const handleAddMessage = (msg) => {
    setMessages([...messages, msg])
  }

  return (
    <div>
      Here are your messages: 
      <br/>
      {displayMessages}
      <MessageForm handleAddMessage={handleAddMessage} />
    </div>
  )
}

export default Messages