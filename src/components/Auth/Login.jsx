import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()

        console.log("email is:- ",email);
        console.log("password is:- ",password);
        
        setEmail("")
        setPassword("")
        
    }

  return (
    <div className='flex text-white bg-black h-screen w-screen items-center justify-center'>
       <div className=' border-2 border-emerald-200 p-15 rounded-3xl'>
            <form onSubmit={(e)=>{
                submitHandler(e)
                handleLogin(email,password)
                
            }}
            className='flex flex-col items-center justify-center w-[22vw]  gap-5 '>
                <input 
                value={email}
                onChange={(e)=>{
                   setEmail(e.target.value);
                }}
                className='text-xl outline-none w-full px-5 py-2 border-emerald-400 border-2 rounded-2xl' 
                type="text" 
                placeholder='Enter your E-mail' 
                />

                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                className='text-xl outline-none w-full px-5 py-2 border-emerald-400 border-2 rounded-2xl' 
                type="password" 
                placeholder='Enter Password' 
                />

                <button className='text-2xl active:scale-95 bg-green-300  px-4 py-1 rounded-xl border-none cursor-pointer text-black font-medium '>Log In</button>
            </form>
       </div>
    </div>
  )
}

export default Login