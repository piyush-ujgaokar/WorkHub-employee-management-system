import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-3xl tracking-wide'>Hello, <br /> <span className='font-bold text-4xl'>Piyush 👋🏼</span></h1>
        <button className='px-4 text-xl py-2 cursor-pointer font-medium rounded-2xl bg-red-700'>Log out</button>
    </div>
  )
}

export default Header