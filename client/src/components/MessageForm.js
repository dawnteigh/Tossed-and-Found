import React, { useContext } from 'react'
import { UserContext } from '../context/user'
import TextareaAutosize from 'react-textarea-autosize';
import { Form } from 'semantic-ui-react';

const MessageForm = ({ handleAddMessage, msgForm, setMsgForm }) => {

  const { setOpen, setErrorMessages } = useContext(UserContext);

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
      if (msg.error) {
        setErrorMessages(msg.error)
        setOpen(true)
      } else {
          handleAddMessage(msg)
          setMsgForm({
            subject: "",
            to: "",
            body: ""
          })
        }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
      <input
        type="text"
        id="subject"
        placeholder="Subject"
        value={msgForm.subject}
        onChange={handleChange}
      />
      <br/>
      <input
        type="text"
        id="to"
        placeholder='To:'
        value={msgForm.to}
        onChange={handleChange}
      />
      <br/>
      <TextareaAutosize
        id="body"
        placeholder='Type your message here'
        minRows={3}
        value={msgForm.body}
        onChange={handleChange}
      />
      <br/>
      </Form.Group>
      <input type="submit" />
    </form>
  )
}

export default MessageForm