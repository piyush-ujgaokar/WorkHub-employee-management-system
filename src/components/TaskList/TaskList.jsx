import React from 'react'
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = ({data}) => {
        
  return (
    <div id='tasklist' className='h-[57%] mt-12 py-5 overflow-x-auto overflow-y-hidden flex flex-nowrap gap-5  w-full '>
        {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx}/>
            }
            if(elem.newTask){
                return <NewTask key={idx}/>
            }
            if(elem.failed){
                return <FailedTask key={idx}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx}/>
            }
                
        })}

         
    </div>
  )
}

export default TaskList