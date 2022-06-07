import React from 'react'
import LibrarySongs from './LibrarySongs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faForward,
  faClose,
  faBackward
} from '@fortawesome/free-solid-svg-icons'
const Library = ({
  Songs,
  setSongs,
  isShowLibrary,
  setShowLibrary,
  isPlaying,
  setCurrentSong,
  audioRef
}) => {
  return (
    <div className={`Library sc4 ${isShowLibrary ? 'active_library' : ''}`}>
      <div className='libaray_title'>
        <h2>Library </h2>

        <FontAwesomeIcon
          icon={faClose}
          onClick={() => setShowLibrary(!isShowLibrary)}
        />
      </div>
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
