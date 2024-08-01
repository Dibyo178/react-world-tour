import './country.css';

const Details = ({country}) => {

    const {name,flags,population,area,cca3} = country;
    console.log(country);

    return (
        <div className="c_border">
            <h3>Country Name: {name?.common}</h3>

            <img src={flags?.png} alt="" />

            <p>Popilation: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code:{cca3}</small></p>
            <button className='btn'>Visited</button>
        </div>
    );
};

export default Details;