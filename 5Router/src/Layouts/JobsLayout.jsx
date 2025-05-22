import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div className='mt-16'>
      <h2 className='text-3xl font-semibold'>Job Openings</h2>
      <p>List of Current Job opening in our company</p>
      <hr className='mt-2'/>
      <br />
      <Outlet/>
    </div>
  )
}

export default JobsLayout
