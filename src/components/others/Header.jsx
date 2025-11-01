import React, { useState } from 'react'

const Header = (props) => {

  const [username, setUsername] = useState('')

  // if(!data){
  //     setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }
  
  
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    
    // window.location.reload()
  }
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-3xl tracking-wide'>Hello, <br /> <span className='font-bold text-4xl'>username 👋🏼</span></h1>
        <button onClick={logOutUser} className='px-4 text-xl py-2 cursor-pointer font-medium rounded-2xl bg-red-700'>Log out</button>
    </div>
  )
}

export default Header