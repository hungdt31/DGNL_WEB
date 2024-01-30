import {useState } from 'react';
import NavContext from './NavContext';


export default function NavResponsive({children}){
  const [nav, setNav] = useState(null);
  return (
    <NavContext.Provider value={{nav, setNav}}>
      {children}
    </NavContext.Provider>
  )
}