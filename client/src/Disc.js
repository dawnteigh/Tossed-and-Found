import React from 'react'

const Disc = ({ disc }) => {

  const { make, model, color, disc_type, weight, img, finder_key } = disc

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
      <br/><br/>
    </div>
  )
}

export default Disc