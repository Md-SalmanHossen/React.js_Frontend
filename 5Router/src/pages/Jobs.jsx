import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Jobs = () => {
   const jobData=useLoaderData();
  return (
    <div className='gap-4 flex '>
      {
         jobData.map((job)=>{
            return <Link className='bg-gray-300 color-black p-4  rounded-xl'>
            <h3 className='text-xl font-bold'>{job.title}</h3>
            <p className='text-sm'>{job.location}</p>
            </Link>
         })
      }
    </div>
  )
}

export default Jobs

export const jobsLoader=async()=>{
   const res=await fetch('http://localhost:5000/jobs');
   return res.json();
}