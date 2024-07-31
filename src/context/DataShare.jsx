import React, { createContext, useState } from 'react'

export const addResponseContext = createContext({})
export const editResphonseContext = createContext({})


function DataShare({children}) {
    const [addResponse, setAddResponse] = useState({});
    const [editResponse, setEditResponse] = useState({});
    
  return (
    // Access value of context
    <addResponseContext.Provider value={{addResponse,setAddResponse}}>
      <editResphonseContext.Provider value={{editResponse,setEditResponse}}>
        {children}
      </editResphonseContext.Provider>
       
    </addResponseContext.Provider>
   
  )
}

export default DataShare