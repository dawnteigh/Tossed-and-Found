import React, { useContext, useState } from 'react'
import Disc from '../components/Disc'
import DiscForm from '../components/DiscForm'
import DiscEdit from '../components/DiscEdit'
import { Card, Divider } from 'semantic-ui-react'
import { UserContext } from '../context/user'

const Discs = () => {

  const { user, setUser } = useContext(UserContext)
  const [editing, setEditing] = useState(false)

  if (!user) {
    return (
      <h1>Loading...</h1>
    )
  }

  const handleAddDisc = (d) => {
    setUser({
      ...user,
      discs: [...user.discs, d]
    })
  }

  const handleRemoveDisc = (id) => {
    const updatedDiscs = user.discs.filter(d => d.id !== id)
    setUser({
      ...user,
      discs: updatedDiscs
    })
  }

  const handleUpdateDisc = (updatedDisc) => {
    const updatedDiscs = user.discs.map(d => {
      if (d.id === updatedDisc.id) {
        return updatedDisc;
      } else {
        return d;
      }
    });
    setUser({
      ...user,
      discs: updatedDiscs
    })
  }

  const displayDiscs = user.discs.map(d => <Disc key={d.id} disc={d} handleRemoveDisc={handleRemoveDisc} handleUpdateDisc={handleUpdateDisc} editing={editing} setEditing={setEditing} />)

  return (
    <>
      <h2>Your Discography</h2>
      {user.discs.length === 0 ?
        "You haven't added any discs yet!" :
        <Card.Group stackable itemsPerRow={3} id="disc-grid">
          {displayDiscs}
        </Card.Group>
      }
      <Divider />
      <div>
        {editing ?
          <DiscEdit handleUpdateDisc={handleUpdateDisc} disc={editing} setEditing={setEditing} /> :
          <DiscForm handleAddDisc={handleAddDisc} />
        }
      </div>
    </>
  )
}

export default Discs