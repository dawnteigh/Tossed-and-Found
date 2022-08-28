import React, { useState } from 'react'

const Disc = ({ disc, handleRemoveDisc }) => {

  const { id, make, model, color, disc_type, weight, img, finder_key, lost } = disc
  const [checked, setChecked] = useState(lost)

  const handleChange = () => {
    fetch (`/discs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        lost: !lost
      })
    })
    .then(r => r.json())
    .then(() => setChecked(!checked))
  }

  const handleDelete = () => {
    fetch(`/discs/${id}`, {
      method: "DELETE"
    })
    handleRemoveDisc(id)
  }

  return (
    <div>
      <b>{make} {model}</b>
      <br/>
      <img src={img} width="200px" height="auto" />
      <br/>
      <b>Type:</b> {disc_type}
      <br/>
      <b>Color:</b> {color}
      <br/>
      <b>Weight:</b> {weight}
      <br/>
      <b>ID:</b> {finder_key}
      <br/>
      <b>Lost?</b> <input type="checkbox" checked={checked} onChange={handleChange} />
      <br/>
      <button onClick={handleDelete} >Delete</button>
      <br/><br/>
    </div>
  )
}

export default Disc