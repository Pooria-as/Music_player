import React from 'react'

const Song = ({ CurrentSong }) => {
  return (
    <div className='Song-Container'>
      <img src={CurrentSong.cover} className='song_img_res ' />
      <h1>{CurrentSong.name}</h1>
      <h2>{CurrentSong.artist}</h2>
    </div>
  )
}

export default Song
