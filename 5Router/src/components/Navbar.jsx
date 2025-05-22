import React from 'react'

import logo from '../assets/react-router.svg'
const Navbar = () => {
  return (
    <div>
      <img className='w-1/18' src={logo} alt="" />
      <ul>
         <li>Home</li>
         <li>Products</li>
         <li>About</li>
         <li>Contact</li>
      </ul>
      <button className='cursor-pointer bg-indigo-500 rounded-sm p-1 text-white'>Get Started</button>
    </div>
  )
}

export default Navbar
