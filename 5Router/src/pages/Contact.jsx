import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  
  const navigate=useNavigate();
  return (
    <div>
      <h1 className='text-2xl'>Contact Page</h1>
      <div className='flex pt-4 pb-3 gap-2'> 
        <button className='bg-black cursor-pointer text-white  rounded-2xl px-3 py-1' onClick={()=>navigate('info')}>Contact Info</button>
        <button className='bg-black cursor-pointer text-white  rounded-2xl px-3 py-1' onClick={()=>navigate('form')}>Contact form</button>
      </div>
    </div>
  )
}

export default Contact
