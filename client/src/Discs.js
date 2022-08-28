import React, { useState, useEffect } from 'react'
import Disc from './Disc'
import DiscForm from './DiscForm'

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
  
    const displayDiscs = discs.map(d => <Disc key={d.id} disc={d} handleRemoveDisc={handleRemoveDisc} /> )

  return (
    <div>
      <h2>Your Discography</h2>
      {displayDiscs}
      <br/>
      <DiscForm handleAddDisc={ handleAddDisc } />
    </div>
  )
}

export default Discs