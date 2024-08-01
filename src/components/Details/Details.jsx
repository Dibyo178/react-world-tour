import { useState } from 'react';
import './country.css';

const Details = ({country}) => {

    const {name,flags,population,area,cca3} = country;
    console.log(country);

    const [visited,setVisited] = useState(false);

    const handleClick = ()=>{

         setVisited(!visited);
    }

    return (
        // coditionaly css uses
        <div className={`c_border ${visited ? 'visited' : 'non_visited'}`}> 
            <h3 style={{color:visited ? 'purple':'none'}}>Country Name: {name?.common}</h3>

            <img src={flags?.png} alt="" />

            <p>Popilation: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={handleClick} className='btn'>{visited?'Visited':'Going Vist'}</button>

            {/* {visited && 'I have a visted this country .'} */}
        </div>
    );
};

export default Details;