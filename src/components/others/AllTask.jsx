import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

const AllTask = () => {

    const authData=useContext(AuthContext)
    
    

  return (
    <div className='bg-[#1c1c1c] rounded-lg text-[1.2vw] gap-5 flex flex-col mt-5 p-3'>

        <div className='bg-teal-700 px-3  rounded-xl flex justify-between py-2'>
                <h2 className='w-1/5 text-xl font-medium '>Employee Name</h2>
                <h3 className='w-1/5 text-xl font-medium '> New task</h3>
                <h5 className='w-1/5 text-xl font-medium '> Active Task</h5>
                <h5 className='w-1/5 text-xl font-medium '> Completed</h5>
                <h5 className='w-1/5 text-xl font-medium '> Failed</h5>
             </div>
        <div>
               {authData.employeeData.map((elem,idx)=>{
                return <div key={idx} id='scrollTasks' className=' px-3 border-[1px] border-emerald-400 mt-3 rounded-xl flex justify-between py-3'>
                <h2 className='w-1/5 text-xl font-medium'>{elem.firstName}</h2>
                <h3 className='w-1/5 text-xl font-medium cursor-pointer text-purple-400'> {elem.taskCount.newTask}</h3>
                <h5 className='w-1/5 text-xl font-medium cursor-pointer text-blue-400'> {elem.taskCount.active}</h5>
                <h5 className='w-1/5 text-xl font-medium cursor-pointer text-green-400'> {elem.taskCount.completed}</h5>
                <h5 className='w-1/5 text-xl font-medium cursor-pointer text-red-400'>{elem.taskCount.failed}</h5>
             </div>
        })}
        </div>
     

    </div>
  )
}

export default AllTask