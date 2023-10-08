import MenuContext from "./MenuContext"
import { ChildrenProviderProps } from "../types"
import { useState } from "react"

function MenuProvider({ children }: ChildrenProviderProps) {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <MenuContext.Provider value={{ open: open, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider