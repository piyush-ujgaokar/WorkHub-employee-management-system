import React from 'react'

const CompleteTask = ({data}) => {
  return (
<div className='bg-green-400 w-[35%] shrink-0 rounded-2xl p-6 h-full '>
                    <div className='flex justify-between items-center '>
                        <h3 className='text-lg font-medium bg-red-500 rounded-xl px-4 py-1 '>{data.category}</h3>
                        <h4 className='text-lg font-medium'>{data.taskDate}</h4>
                    </div>
                    <h1 className='mt-5 text-4xl font-semibold'>{data.taskTitle}</h1>
                    <p className='mt-3 text-pretty'>{data.taskDescription}</p>
                <div className='mt-4'>
                    <button className='bg-blue-600 w-full font-medium  hover:bg-blue-700 active:scale-95 cursor-pointer px-2 py-2 outline-none rounded-xl text-[1.1vw]'>Completed</button>
                </div>
</div>
  )
}

export default CompleteTask