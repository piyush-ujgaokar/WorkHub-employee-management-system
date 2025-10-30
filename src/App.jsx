import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/Authprovider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserdata, setLoggedInUserdata] = useState(null)
  const authData=useContext(AuthContext)
  console.log(authData);


 useEffect(()=>{
  const loggedInUser=localStorage.getItem('loggedInUser')
  console.log(loggedInUser);

  if(loggedInUser){
   const userData=JSON.parse(loggedInUser)
   setUser(userData.role)
   setLoggedInUserdata(userData.data)
    
  }

 },[])


  
  const handleLogin=(email,password)=>{
      if(email=='admin@me.com' && password==123){
        setUser('admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }else if(authData){
          const employee=authData.employeeData.find((e)=> email==e.email && e.password==password)

          if(employee){
            setUser('employee')
            setLoggedInUserdata(employee)
            localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
          }

      }else{
        alert("Invalid user");
        
      }
  }

  
  
  return (
    <>
      <div>
        
        {!user ? <Login handleLogin={handleLogin}/>: ''}
        {user == 'admin' ?<AdminDashboard/> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserdata} /> : null)}
      </div>
    
    </>
  )
}

export default App