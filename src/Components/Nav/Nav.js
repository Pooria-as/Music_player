import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
const Nav = ({ isShowLibrary, setShowLibrary }) => {
  //active and deactive func
  const ToggleLibraryHandler = () => {
    setShowLibrary(!isShowLibrary)
  }

  return (
    <nav className='nav'>
      <button className='toggle-btn' onClick={ToggleLibraryHandler}>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  )
}

export default Nav
