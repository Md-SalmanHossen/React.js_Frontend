import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
      <h2 className='text-3xl font-semibold'>Job Openings</h2>
      <p>List of Current Job opening in our company</p>
      <hr />
      <br />
      <Outlet/>
    </div>
  )
}

export default JobsLayout
