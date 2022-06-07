import React from 'react'

const LibrarySongs = ({
  Song,
  Songs,
  setSongs,
  isPlaying,
  setCurrentSong,
  audioRef
}) => {
  const HandleChangeSong = () => {
    setCurrentSong(Song)
    //active and deactive song
    const ChangeActive = Songs.map(song => {
      if (song.id === Song.id) {
        return {
          ...song,
          active: true
        }
      } else {
        return {
          ...song,
          active: false
        }
      }
    })
    setSongs(ChangeActive)

    if (isPlaying) {
      const playPromise = audioRef.current.play()
      if (playPromise !== 'undefined') {
        playPromise.then(audio => {
          audioRef.current.play()
        })
      }
    }
  }
  return (
    <div
      className={`Library-Container ${Song.active ? 'active' : ''}  `}
      onClick={HandleChangeSong}
    >
      <img src={Song.cover} alt={Song.name} />
      <div className='Library_des'>
        <h1>{Song.name}</h1>
        <h2>{Song.artist}</h2>
      </div>
    </div>
  )
}

export default LibrarySongs
