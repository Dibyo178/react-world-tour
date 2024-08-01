
import { useEffect } from 'react';
import { useState } from 'react';

import Details from '../Details/Details';

import './countries.css';


const Countries = () => {

   const [countries,setCountries] =useState([]);

   

   useEffect(()=>{
      
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));

        
   },[])

    return (

         <>
         <h3>Countries:{countries.length} </h3>
        <div className='country-container'>
            

           

            {

            countries.map((country)=> <Details key={country.cca3} country={country}/>)
            }
        </div>

        </>
    );
};

export default Countries;