import { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  if (!country) return <p>Loading country data......</p>

  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);
  
  const handleVisited = () => {
    setVisited(!visited);
  }

  //console.log(handleVisitedCountry);

  

  return (
    <div className={`border-2 border-blue-500 p-5 rounded-xl m-4 ${visited && 'bg-orange-100'}`}>
      <h3 >Name: {name?.common}</h3>
      <img className="w-1/2" src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>area :{area}</p>
      <p><small>Code: {cca3}</small></p>
      <button
        onClick={()=>{handleVisitedCountry(country)}} 
        className='p-1 rounded-sm cursor-pointer bg-blue-400 text-white'
      >Mark visited</button><br />
      <button
        onClick={handleVisited}
        className={`p-1 rounded-sm cursor-pointer ${visited ? 'bg-green-200' : 'bg-indigo-200'}`}>{visited ? 'visited' : 'Going'}</button>

      {visited ? 'I have visited' : 'I want to visit'}
    </div>
  )
}

export default Country
