import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const {name ,population,region,flag}=props.country
    const flagStyle={
        height:'50px'
    }
    const countryStyle={
        border:'1px solid green',
        margin:'10px',
        padding:'10px'
    }

  const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>

            <img style={flagStyle} src={flag} alt='flag'></img>
            <h4>Country name:{name}</h4>
            <h4>Country name:{population}</h4>
            <h4>Country name:{region}</h4>
            <button onClick={() =>handleAddCountry(props.country)}>Add Country</button>

        </div>
    );
};

export default Country;