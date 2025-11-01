import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

    
  
  return (
    <div>
        <div className='px-10 py-5 text-white bg-black h-screen'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumbers data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard