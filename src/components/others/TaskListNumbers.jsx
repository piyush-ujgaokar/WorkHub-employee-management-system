import React from 'react'

const TaskListNumbers = ({data}) => {


  
  return (
    <div className='flex justify-between mt-10 gap-5'>
      <div className='w-[42%] bg-purple-400  px-8 py-5 rounded-xl'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-4xl font-medium'>New task</h3>
      </div>
      <div className='w-[42%] bg-green-400  px-8 py-5 rounded-xl'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-4xl font-medium'>Completed task</h3>
      </div>
      <div className='w-[42%] bg-blue-400  px-8 py-5 rounded-xl'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-4xl font-medium'>Accepted task</h3>
      </div>
      <div className='w-[42%] bg-red-400  px-8 py-5 rounded-xl'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-4xl font-medium'>Failed task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers