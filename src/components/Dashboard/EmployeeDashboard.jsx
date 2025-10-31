import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {

    
  
  return (
    <div>
        <div className='px-10 py-5 text-white bg-black h-screen'>
            <Header data={data}/>
            <TaskListNumbers data={data}/>
            <TaskList data={data}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard