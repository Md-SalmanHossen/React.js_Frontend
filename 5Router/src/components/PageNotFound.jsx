import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

   const navigate=useNavigate();
  return (
    <div>
      <h1 className='font-semibold text-2xl'>404 | Page not found</h1>
      <br />
      <button className='cursor-pointer text-white bg-black rounded-xl py-2 px-1' onClick={()=>navigate('/')}>Go to homepage</button>
    </div>
  )
}

export default PageNotFound
