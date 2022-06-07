import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faForward,
  faBackward
} from '@fortawesome/free-solid-svg-icons'
import Song from '../Song/Song'
const Player = ({
  onDragable,
  CurrentSong,
  setCurrentSong,
  Songs,
  SongInfo,
  isPlaying,
  setIsPlaying,
  setSongs,
  audioRef
}) => {
  useEffect(() => {
    //active and deactive song
    const ToggleActive = Songs.map(song => {
      if (song.id === CurrentSong.id) {
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
    setSongs(ToggleActive)
  }, [CurrentSong])
  //This function is for play and pause 
  const PlaySongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }
  //convert time of audio
  const getTime = time => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }
//this function use for forrward and backward
  const forwardOrBackward = type => {
    const currentIndexOfSong = Songs.findIndex(
      song => song.id === CurrentSong.id
    )
    if (type === 'forward') {
      setCurrentSong(Songs[(currentIndexOfSong + 1) % Songs.length])
    }
    if (type === 'Backward') {
      if ((currentIndexOfSong - 1) % Songs.length === -1) {
        setCurrentSong(Songs[Songs.length - 1])
        return
      }
      setCurrentSong(Songs[(currentIndexOfSong - 1) % Songs.length])
    }
  }

  return (
    <div className='Player'>
      <div className='time-control'>
        <p>{getTime(SongInfo.CurrenTime)}</p>
        <input
          className='pointer'
          type='range'
          min={0}
          max={SongInfo.Duration || 0}
          onChange={onDragable}
          value={SongInfo.CurrenTime}
        />
        <p>{getTime(SongInfo.Duration)}</p>
      </div>
      <div className='Player-control'>
        <FontAwesomeIcon
          onClick={() => forwardOrBackward('Backward')}
          icon={faBackward}
          className='pointer Backward'
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className='pointer Pause'
          onClick={PlaySongHandler}
        />
        <FontAwesomeIcon
          onClick={() => forwardOrBackward('forward')}
          icon={faForward}
          className='pointer Forward'
        />
      </div>
    </div>
  )
}

export default Player
