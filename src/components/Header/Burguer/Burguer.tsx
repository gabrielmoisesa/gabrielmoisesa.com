import { useContext } from 'react'
import './Burguer.scss'
import MenuContext from '../../../context/MenuContext'

function Burguer() {
  const { open, toggleMenu } = useContext(MenuContext)
  const isOpen = open && 'cross-burguer'

  return (
      <button onClick={toggleMenu} className={`burguer-button fade-in ${isOpen}`}>
        <span></span>
        <span></span>
        <span></span>
      </button>
  )
}

export default Burguer