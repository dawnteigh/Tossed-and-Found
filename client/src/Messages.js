import React, { useContext, useState, useEffect } from 'react'
import MessageForm from './MessageForm'
import Moment from 'moment'
import { Comment, Container, Divider } from 'semantic-ui-react'
import { UserContext } from './context/user'
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
    <Comment 
      className="message"
      style={ m.user.username === user.username ? { background: "rgba(255, 140, 0, 0.325)"} : null }
    >
      <Comment.Content>
        <Comment.Author as="a">{m.user.username === user.username ? "me" : m.user.username}</Comment.Author>
        <Comment.Metadata>
          <div>to: { m.to === user.username ? "me" : m.to } | {Moment(m.created_at).format('MMMM DD,  LT')}</div>
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
      <Comment.Group>
        {displayMessages}
      </Comment.Group>
      <br/>
      <MessageForm handleAddMessage={handleAddMessage} />
    </Container>
  )
}

export default Messages