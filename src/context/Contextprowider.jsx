import React from 'react'
import { createContext } from 'react'

 export const userCondext = createContext()

 const Contextprowider = ({children}) => {
    const role='admin'
    const authenticated =true;

  return (
    <userCondext.Provider value={{role,authenticated}}>
        {children}
    </userCondext.Provider>
  )
}

export default Contextprowider