import React from 'react'

const FailedTask = () => {
  return (
    <div className='bg-red-400 w-[35%] shrink-0 rounded-2xl p-6 h-full '>
                    <div className='flex justify-between items-center '>
                        <h3 className='text-lg font-medium bg-red-500 rounded-xl px-4 py-1 '>High</h3>
                        <h4 className='text-lg font-medium'>20 Feb 2024</h4>
                    </div>
                    <h1 className='mt-5 text-4xl font-semibold'>Make a Youtube video</h1>
                    <p className='mt-3 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem ipsum aut amet architecto magnam nobis dolor atque totam aperiam. Ex optio nobis porro ullam ea molestiae accusamus veniam dolores.</p>
                 <div className='mt-4'>
                    <button className='bg-red-600 w-full font-medium  hover:bg-red-700 active:scale-95 cursor-pointer px-2 py-2 outline-none rounded-xl text-[1.1vw]'>Failed</button>
                </div>
</div>
  )
}

export default FailedTask