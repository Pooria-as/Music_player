import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'
import Library from './Components/Library/Library'
import Nav from './Components/Nav/Nav'
import Player from './Components/Player/Player'
import Song from './Components/Song/Song'
import { SONGS_URL } from './utilities/url'

const App = () => {
  const [Songs, setSongs] = useState([])
  const [CurrentSong, setCurrentSong] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShowLibrary, setShowLibrary] = useState(false)
  const [SongInfo, setSongInfo] = useState({
    CurrenTime: '',
    Duration: ''
  })
  const audioRef = useRef()
  useEffect(() => {
    const GetSongs = async () => {
      const getdata = await axios.get(SONGS_URL).then(res => res.data)
      setSongs(getdata)
      setCurrentSong(getdata[0])
    }
    GetSongs()
  }, [])
  //for set time of audio to related state
  const onTimeUpdate = e => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({
      ...SongInfo,
      CurrenTime: currentTime,
      Duration: duration
    })
  }
  //for drag audio line
  const onDragable = e => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...SongInfo, CurrenTime: e.target.value })
  }
  return (
    <div> 
      <Nav isShowLibrary={isShowLibrary} setShowLibrary={setShowLibrary} />

      <Song CurrentSong={CurrentSong} />
      <Player
        Songs={Songs}
        setSongs={setSongs}
        SongInfo={SongInfo}
        onTimeUpdate={onTimeUpdate}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        CurrentSong={CurrentSong}
        setCurrentSong={setCurrentSong}
        onDragable={onDragable}
      />
      <Library
        isShowLibrary={isShowLibrary}
        setShowLibrary={setShowLibrary}
        setSongs={setSongs}
        CurrentSong={CurrentSong}
        isPlaying={isPlaying}
        Songs={Songs}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
      />

      <audio
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        ref={audioRef}
        src={CurrentSong.audio}
      ></audio>
    </div>
  )
}

export default App
