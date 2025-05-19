import { useState } from "react";

const Country = ({country}) => {
  if(!country) return <p>Loading country data......</p>

   const {name,flags,population,area,cca3}=country;

   const[visited,setVisited]=useState(false);
   const handleVisited=()=>{
     setVisited(!visited);
   }
   return (
    <div className="border-2 border-blue-500 p-5 rounded-xl m-4">
      <h3 >Name: {name?.common}</h3>
      <img className="w-2/7" src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>area :{area}</p>
      <p><small>Code: {cca3}</small></p>
      <button 
        onClick={handleVisited}
        className="bg-indigo-50 p-1 rounded-sm cursor-pointer">{visited ? 'visited':'Going'}</button>
        {visited ? 'I have visited this country country':'I want to visit this country'}
    </div>
  )
} 

export default Country
