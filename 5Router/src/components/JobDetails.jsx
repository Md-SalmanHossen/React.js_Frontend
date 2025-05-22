import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {

   const jobDetails=useLoaderData();

  return (
    <div className='px-0 max-w-4xl space-y-3'>
      <p><b>Job Title: </b>{jobDetails.title}</p>
      <p><b>Salary: </b>{jobDetails.title}</p>
      <p><b>Location: </b>{jobDetails.location}</p>
      <p><b>Description: </b>{jobDetails.description}</p>
      <button className='bg-black text-white mt-4 cursor-pointer rounded-xl py-1 px-2'>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader=async({params})=>{
   const {id}=params;
   const res=await fetch('http://localhost:5000/jobs/'+id);
   if(!res.ok){
      throw Error();
   }
   return res.json();
}