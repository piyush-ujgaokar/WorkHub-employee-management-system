import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
         <div className='bg-blue-400 w-[35%] shrink-0 rounded-2xl p-6 h-full '>
                    <div className='flex justify-between items-center '>
                        <h3 className='text-lg font-medium bg-red-500 rounded-xl px-4 py-1 '>{data.category}</h3>
                        <h4 className='text-lg font-medium'>{data.taskDate}</h4>
                    </div>
                    <h1 className='mt-5 text-4xl font-semibold'>{data.taskTitle}</h1>
                    <p className='mt-3 text-pretty'>{data.taskDescription}</p>
                <div className='flex justify-between mt-4'>
                    <button className='bg-green-600 font-medium hover:bg-green-700 active:scale-95 cursor-pointer  px-2 py-2 outline-none rounded-xl text-[1.1vw]'>Mark As completed</button>
                    <button className='bg-red-600 font-medium  hover:bg-red-700 active:scale-95 cursor-pointer px-2 py-2 outline-none rounded-xl text-[1.1vw]'>mark As Failed</button>
                </div>
            </div>
  )
}

export default AcceptTask