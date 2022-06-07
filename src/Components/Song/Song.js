import React from 'react'

const Song = ({ CurrentSong }) => {
  return (
    <div className='Song-Container'>
      <img src={CurrentSong.cover} />
      <h1>{CurrentSong.name}</h1>
      <h2>{CurrentSong.artist}</h2>
    </div>
  )
}

export default Song
