
const Country = ({country}) => {
   const {name,flags}=country;
   console.log(country);
  return (
    <div className="border-2 border-blue-500 p-5 rounded-xl m-4">
      <h3 >Name: {name?.common}</h3>
      <img className="w-2/7" src={flags.png} alt="" />
    </div>
  )
} 

export default Country
