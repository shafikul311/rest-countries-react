import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';





function App() {
  const [countries ,setCountries]=useState([]);
  const [cart,setCart]= useState([])

  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response =>response.json())
    .then(data =>{
      setCountries(data)
    const names = data.map(country => country.name)
    // console.log(names)
    })
    .catch(error =>console.log(error))


  }, [])

  const handleAddCountry=(country)=> {
    const newCart = [...cart, country];
    setCart(newCart)
  }
 
  return (
    <div className="App">
      <h1>country loaded :{countries.length}</h1>
      <h1>country Added :{cart.length} </h1>
      <Cart cart={cart}></Cart>
        {countries.map(country => <Country  country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)}
       
   
    </div>
  );
}

export default App;
