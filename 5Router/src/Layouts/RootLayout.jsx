import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex items-center w-full h-80 justify-center font-semibold'>
         <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout
