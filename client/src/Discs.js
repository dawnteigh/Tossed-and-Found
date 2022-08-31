import React, { useState, useEffect } from 'react'
import Disc from './Disc'
import DiscForm from './DiscForm'
import { Card, Divider } from 'semantic-ui-react'

const Discs = () => {

  const [discs, setDiscs] = useState([])

  useEffect(() => {
    fetch('/discs')
    .then(r => r.json())
    .then(data => setDiscs(data))
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