import { useState } from 'react';
import MenuContext from './MenuContext';
import { ChildrenProviderProps } from '../types';

function MenuProvider({ children }: ChildrenProviderProps) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <MenuContext.Provider value={ { open, toggleMenu } }>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;
