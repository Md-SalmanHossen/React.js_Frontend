import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {

   const error=useRouteError();
   const navigate=useNavigate();

  return (
    <div>
      <h3>An error occurred</h3>
      <p>{error.message}</p>
      <button className='bg-black text-white py-1 px-2 cursor-pointer rounded-xl mt-1' onClick={()=>navigate('/')}>Go to homepage</button>
    </div>
  )
}

export default Error
