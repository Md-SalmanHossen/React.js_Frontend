import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

   const navigate=useNavigate();
  return (
    <div>
      <h1 className='font-semibold text-2xl'>404 | Page not found</h1>
      <br />
      <button className='cursor-pointer text-white bg-black rounded-xl p-1 px-2' onClick={()=>navigate('/')}>Go to homepage</button>
    </div>
  )
}

export default PageNotFound
