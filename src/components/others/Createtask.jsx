import React from 'react'

const Createtask = () => {
  return (
    <div className='p-3 bg-[#1c1c1c] mt-5 rounded'>
            <form className='flex w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-gray-300 font-medium text-lg mb-0.5'>Task Title</h3>
                    <input className='text-medium px-3  py-2 bg-transparent rounded-xl outline-none border-2 mb-4 border-gray-400 w-4/5' type="text " placeholder='Make a ui design' />
                </div>
                <div>
                    <h3 className='text-gray-300 font-medium text-lg mb-0.5'>date</h3>
                    <input className='text-medium px-3 py-2 bg-transparent rounded-xl outline-none border-2 mb-4 border-gray-400 w-4/5' type="date" />
                </div>
                <div>
                    <h3 className='text-gray-300 font-medium text-lg mb-0.5'>Assign to</h3>
                    <input className='text-medium px-3 py-2 bg-transparent rounded-xl outline-none border-2 mb-4 border-gray-400 w-4/5' type="text" placeholder='Employee name' />
                </div>
                <div>
                    <h3 className='text-gray-300 font-medium text-lg mb-0.5'>catogery</h3>
                    <input className='text-medium px-3 py-2 bg-transparent rounded-xl outline-none border-2 mb-4 border-gray-400 w-4/5' type="text" placeholder='design,dev, etc' />
                </div>
            </div>
            <div className='w-2/5 '>
                <h3 className='text-gray-300 font-medium text-lg mb-0.5'>Description</h3>
                <textarea  className='text-sm resize-none px-3 py-2 bg-transparent rounded-xl outline-none border-2 border-gray-400 w-full h-53' name="" cols='30' rows='10' id=""></textarea>
            <button className='text-xl bg-emerald-500 hover:bg-emerald-700 px-3 py-2 rounded-xl mt-5 w-full cursor-pointer'>Create Task</button>
            </div>




            </form>
        </div>
  )
}

export default Createtask