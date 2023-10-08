import MenuContext from "./MenuContext"
import { ChildrenProviderProps } from "../types"

function MenuProvider({ children }: ChildrenProviderProps) {
  return (
    <MenuContext.Provider value={{ open: true }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider