import React from 'react'
import LibrarySongs from './LibrarySongs'

const Library = ({
  Songs,
  setSongs,
  isShowLibrary,
  isPlaying,
  setCurrentSong,
  audioRef
}) => {
  return (
    <div className={`Library sc4 ${isShowLibrary ? 'active_library' : ''}`}>
      <h2>Library</h2>
      <div className='Library-Songs'>
        {Songs.map(Song => (
          <LibrarySongs
            Songs={Songs}
            setSongs={setSongs}
            audioRef={audioRef}
            Song={Song}
            key={Song.id}
            isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  )
}

export default Library
