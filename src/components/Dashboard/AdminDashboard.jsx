import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-screen px-10 py-5 bg-black text-white'>
        <Header changeUser={props.changeUser}/>
        <Createtask/>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard