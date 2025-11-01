import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../utils/LocalStorage'

export const AuthContext=createContext()

const Authprovider = ({children}) => {

    const [userData, setuserData] = useState(null)
     
    useEffect(()=>{
        SetLocalStorage()
        const {employeeData}=GetLocalStorage()
        setuserData(employeeData)
        
    },[])
    
    
    
    

  return (
    <div>
        <AuthContext.Provider value={[userData,setuserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Authprovider