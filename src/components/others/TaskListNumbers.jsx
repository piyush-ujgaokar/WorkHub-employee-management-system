import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex justify-between mt-10 gap-5'>
      <div className='w-[42%] bg-red-400  px-8 py-5 rounded-xl'>
        <h2 className='text-4xl font-semibold'>0</h2>
        <h3 className='text-5xl font-medium'>New task</h3>
      </div>
      <div className='w-[42%] bg-blue-400  px-8 py-5 rounded-xl'>
        <h2 className='text-4xl font-semibold'>0</h2>
        <h3 className='text-5xl font-medium'>New task</h3>
      </div>
      <div className='w-[42%] bg-green-400  px-8 py-5 rounded-xl'>
        <h2 className='text-4xl font-semibold'>0</h2>
        <h3 className='text-5xl font-medium'>New task</h3>
      </div>
      <div className='w-[42%] bg-yellow-400  px-8 py-5 rounded-xl'>
        <h2 className='text-4xl font-semibold'>0</h2>
        <h3 className='text-5xl font-medium'>New task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers