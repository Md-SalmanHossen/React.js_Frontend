import { useEffect, useState } from "react"
import Country from "./Country";


const Countries = () => {
   const [countries,setCountries]=useState([]);
   const [visitedCountries,setVisitedCountries]=useState([]);

   useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res=>res.json())
      .then(data=> setCountries(data));
      
   },[])

   const handleVisitedCountry=country=>{
      console.log('add this is your visited country');
      
      console.log(country)
   }
   return (
      <div >
         <h3 className="text-center">Countries : {countries.length}</h3>
         <div>
            <h4>Visited Country</h4>
            <ul>

            </ul>
         </div>
         <div className="grid grid-cols-3">
            {
            countries.map(country=><Country 
               key={country.cca3} 
               country={country}
               handleVisitedCountry={handleVisitedCountry}>
            </Country>)
            }
         </div>
      </div>
   )
}

export default Countries
