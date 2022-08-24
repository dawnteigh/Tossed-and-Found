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

  const displayDiscs = discs.map(d => <Disc key={d.id} disc={d} /> )

  return (
    <div>
      {displayDiscs}
      <br/>
      <DiscForm />
    </div>
  )
}

export default Discs