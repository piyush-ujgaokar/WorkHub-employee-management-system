import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../utils/LocalStorage'

export const AuthContext=createContext()

const Authprovider = ({children}) => {

    const [userData, setuserData] = useState(null)

    useEffect(()=>{
        SetLocalStorage()
        const {employeeData,adminData}=GetLocalStorage()
        setuserData({employeeData,adminData})
        
    },[])
    
    
    
    

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default Authprovider