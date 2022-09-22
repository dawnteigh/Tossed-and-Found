import React, { useContext } from 'react'
import Disc from '../components/Disc'
import DiscForm from '../components/DiscForm'
import { Card, Divider } from 'semantic-ui-react'
import { UserContext } from '../context/user'

const Discs = () => {

  const { user, setUser } = useContext(UserContext)

  if (!user.discs) {
    return (
      <h1>Loading...</h1>
      )
  }

  const handleAddDisc = (d) => {
    setUser({
      ...user,
      discs: [...user.discs, d ]     
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
  
  const displayDiscs = user.discs.map(d => <Disc key={d.id} disc={d} handleRemoveDisc={handleRemoveDisc} handleUpdateDisc={handleUpdateDisc} /> )
  
  return (
    <>
      <h2>Your Discography</h2>
      <Card.Group stackable itemsPerRow={3} id="discGrid">
        {displayDiscs}
      </Card.Group>
      <Divider />
      <div>
        <DiscForm handleAddDisc={ handleAddDisc } />
      </div>
    </>
  )
}

export default Discs