import React, { useContext, useState } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { UserContext } from '../context/user'

const Disc = ({ disc, handleRemoveDisc, handleUpdateDisc, editing, setEditing }) => {

  const { id, make, model, color, disc_type, weight, img, finder_key, lost } = disc
  const [checked, setChecked] = useState(lost)
  const { setOpen, setErrorMessages } = useContext(UserContext)

  const handleChange = () => {
    fetch(`/api/discs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        lost: !lost
      })
    })
      .then(r => r.json())
      .then(disc => {
        if (disc.error) {
          setErrorMessages(disc.error)
          setOpen(true)
        } else {
          handleUpdateDisc(disc)
          setChecked(!checked)
        }
      })
  }

  const handleEdit = () => {
    if (editing.id === id) {
      setEditing(false)
    }
    else {
      setEditing(disc)
    }
  }

  const handleDelete = () => {
    fetch(`/api/discs/${id}`, {
      method: "DELETE"
    })
    handleRemoveDisc(id)
  }

  return (
    <Card raised>
      <Image size="medium" src={img} />
      <Card.Content>
        <Card.Header>{make} {model}</Card.Header>
        <Card.Meta>
          <span className='date'>{disc_type}</span>
        </Card.Meta>
        <Card.Description>
          <b>Color:</b> {color}
          <br />
          <b>Weight:</b> {weight}
          <br />
          <b>ID:</b> {finder_key}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <button className='edit' onClick={handleEdit}>{editing.id === id ? "Cancel" : "Edit"}</button>
        <b>Lost?</b> <input type="checkbox" checked={checked} onChange={handleChange} />
        <button className="delete" onClick={handleDelete}>Delete</button>
      </Card.Content>
    </Card>
  )
}

export default Disc