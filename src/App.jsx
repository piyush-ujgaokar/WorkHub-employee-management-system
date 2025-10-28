import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { GetLocalStorage, SetLocalStorage } from './utils/LocalStorage'

const App = () => {

  const [user, setUser] = useState(null)
  
  const handleLogin=(email,password)=>{
      if(email=='admin@me.com' && password==123){
        setUser('admin')
        console.log(user);
        
      }else if(email=='user@me.com' && password==123){
        setUser('employee')
        console.log(user);
        
      }else{
        alert("Invalid user");
        
      }
  }

  return (
    <>
      <div>
        
        {!user ? <Login handleLogin={handleLogin}/>:''}
        {user == 'admin' ?<AdminDashboard/>:<EmployeeDashboard/>}
      </div>
    
    </>
  )
}

export default App