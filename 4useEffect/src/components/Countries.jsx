import { useEffect, useState } from "react"
import Country from "./Country";


const Countries = () => {
   const [countries,setCountries]=useState([]);
   const [visitedCountries,setVisitedCountries]=useState([]);
   const [visitedFlag,setVisitedFlag]=useState([]);
   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=> setCountries(data));
      
   },[])

   const handleVisitedCountry=country=>{
      console.log('add this is your visited country');
      const newVisitedCountries=[...visitedCountries,country];
      setVisitedCountries(newVisitedCountries);
   }
   const handleVisitedFlags=flag=>{
      const newVisitedFlag=[...visitedFlag,flag];
      setVisitedFlag(newVisitedFlag)
   }
   return (
      <div>
         <h3 className="text-center">Countries : {countries.length}</h3>
         {/* visited country */}
         <div  className="m-5">
            <h4>Visited Country :</h4>
            <ul>
               {
                  visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
               }
            </ul>
         </div>
         {/* visited flag */}
         <div className="w-1/12 mx-5">
               {
                  visitedFlag.map((flag,index)=><img  key={index} src={flag}></img>)
               }
         </div>
         
         
         <div className="grid grid-cols-3">
            {
            countries.map(country=><Country 
               key={country.cca3} 
               country={country}
               handleVisitedCountry={handleVisitedCountry}
               handleVisitedFlags={handleVisitedFlags}>
            </Country>)
            }
         </div>
      </div>
   )
}

export default Countries
