import React, { useContext, useState } from 'react'
import MessageForm from '../components/MessageForm'
import Moment from 'moment'
import { Comment, Container, Divider, Input } from 'semantic-ui-react'
import { UserContext } from '../context/user'

const Messages = ({ msgForm, setMsgForm }) => {
  const { user, setUser } = useContext(UserContext)
  const [filter, setFilter] = useState("")

  const filteredMessages = user.messages.filter(m => (m.subject + " " + m.body + " " + m.to + " " + m.from).toLowerCase().includes(filter.toLowerCase()))
  const displayMessages = filteredMessages.map(m => {
    return (
    <Comment
      key={m.id}
      className="message"
      style={ m.from === user.username ? { background: "rgba(255, 140, 0, 0.325)" } : null }
    >
      <Comment.Content>
        <Comment.Author as="a">{m.from === user.username ? "me" : m.from}</Comment.Author>
        <Comment.Metadata>
          <div>to: { m.to === user.username ? "me" : m.to } | {Moment(m.created_at).format('MMMM DD,  LT') }</div>
        </Comment.Metadata>
        <Divider fitted />
        <Comment.Text>
          <b>{m.subject}</b><br/>
          {m.body}  
        </Comment.Text>
        <Comment.Actions>
        {m.from === user.username ? null :
          <Comment.Action onClick={() =>
            setMsgForm({
              ...msgForm,
              subject: m.subject,
              to: m.from
              })
            } >Reply</Comment.Action>}
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    )
  })

  const handleAddMessage = (msg) => {
    setUser({
      ...user,
      messages: [...user.messages, msg]
    })
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