import { useContext } from 'react'
import './Burguer.scss'
import MenuContext from '../../../context/MenuContext'

function Burguer() {
  const toggleMenu = useContext(MenuContext).toggleMenu

  return (
      <button onClick={toggleMenu} className='burguer-button fade-in'>
        <span></span>
        <span></span>
        <span></span>
      </button>
  )
}

export default Burguer