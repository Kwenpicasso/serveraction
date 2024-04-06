import React from 'react'
import { ModeToggle } from '../component/Moon'
import First from '../component/first'

const page = () => {
  return (
    <div className='w-full h-full p-5'>
      <div className='w-full flex justify-end items-end'>
        <ModeToggle/>
      </div>
     <First/>
    </div>
  )
}

export default page