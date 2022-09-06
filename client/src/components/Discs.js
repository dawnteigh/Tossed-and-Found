import React, { useState, useEffect, useContext } from 'react'
import Disc from '../components/Disc'
import DiscForm from '../components/DiscForm'
import { Card, Divider } from 'semantic-ui-react'
import { UserContext } from '../context/user'

const Discs = () => {

  const [discs, setDiscs] = useState([])
  const { setOpen, setErrorMessages } = useContext(UserContext)

  useEffect(() => {
    fetch('/discs')
    .then(r => r.json())
    .then(data => {
      if (data.error) {
        setErrorMessages(data.error)
        setOpen(true)
      }
    setDiscs(data)
    })
  }, [])
  
  const handleAddDisc = (d) => {
    setDiscs([...discs, d])
  }
  
  const handleRemoveDisc = (id) => {
    const updatedDiscs = discs.filter(d => d.id !== id)
    setDiscs(updatedDiscs)
  }

  const handleUpdateDisc = (updatedDisc) => {
    const updatedDiscs = discs.map(d => {
      if (d.id === updatedDisc.id) {
        return updatedDisc;
      } else {
        return d;
      }
    });
    setDiscs(updatedDiscs);
  }
  
  const displayDiscs = discs.map(d => <Disc key={d.id} disc={d} handleRemoveDisc={handleRemoveDisc} handleUpdateDisc={handleUpdateDisc} /> )
    
  return (
    <>
      <h2>Your Discography</h2>
      <Card.Group itemsPerRow={3} id="discGrid">
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