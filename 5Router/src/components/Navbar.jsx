import React from 'react'

import logo from '../assets/react-router.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center p-6 '>
      <img className='w-1/32 cursor-pointer' src={logo} alt="" />
      <ul className='flex cursor-pointer items-center gap-2 text-xl rounded-xl shadow-xl px-4 py-2 text-black'>
         <NavLink  to='/' className={({isActive})=>isActive?'inline-block text-red-500 px-3':'inline-block  px-3'}>Home</NavLink>
         <NavLink  to='/products' className={({isActive})=>isActive?'inline-block text-red-500 px-3':'inline-block  px-3'}>Products</NavLink>
         <NavLink  to='/about' className={({isActive})=>isActive?'inline-block px-3 text-red-500':'inline-block px-3'}>About</NavLink>
         <NavLink  to='/contact' className={({isActive})=>isActive?'inline-block px-3 text-red-500':'inline-block px-3'}>Contact</NavLink>
      </ul>
      <button className='cursor-pointer  bg-black rounded-xl px-3 py-1 text-white'>Get Started</button>
    </div>
  )
}

export default Navbar
