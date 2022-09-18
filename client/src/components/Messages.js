import React, { useContext, useState, useEffect } from 'react'
import MessageForm from '../components/MessageForm'
import Moment from 'moment'
import { Comment, Container, Divider, Input } from 'semantic-ui-react'
import { UserContext } from '../context/user'

const Messages = ({ msgForm, setMsgForm }) => {
  const { user, setOpen, setErrorMessages } = useContext(UserContext)
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetch("/messages")
    .then(r => r.json())
    .then(data => {
      if (data.error) {
        setErrorMessages(data.error)
        setOpen(true)
      } else {
          setMessages(data)
        }
    })
  }, [])

  const filteredMessages = messages.filter(m => (m.subject + " " + m.body + " " + m.to + " " + m.user.username).toLowerCase().includes(filter.toLowerCase()))
  const displayMessages = filteredMessages.map(m => {
    return (
    <Comment
      key={m.id}
      className="message"
      style={ m.user.username === user.username ? { background: "rgba(255, 140, 0, 0.325)" } : null }
    >
      <Comment.Content>
        <Comment.Author as="a">{m.user.username === user.username ? "me" : m.user.username}</Comment.Author>
        <Comment.Metadata>
          <div>to: { m.to === user.username ? "me" : m.to } | {Moment(m.created_at).format('MMMM DD,  LT') }</div>
        </Comment.Metadata>
        <Divider fitted />
        <Comment.Text>
          <b>{m.subject}</b><br/>
          {m.body}  
        </Comment.Text>
        <Comment.Actions>
        {m.user.username === user.username ? null :
          <Comment.Action onClick={() =>
            setMsgForm({
              ...msgForm,
              subject: m.subject,
              to: m.user.username
              })
            } >Reply</Comment.Action>}
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    )
  })

  const handleAddMessage = (msg) => {
    setMessages([...messages, msg])
  }

  return (
    <Container>
      <Input
        icon='mail'
        iconPosition='left'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search messages"
      />
      <Comment.Group>
        {displayMessages}
      </Comment.Group>
      <br/>
      <MessageForm handleAddMessage={handleAddMessage} msgForm={msgForm} setMsgForm={setMsgForm} />
    </Container>
  )
}

export default Messages