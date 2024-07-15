import './App.css'
import Result from './Components/Result'
import Search from './Components/Search'
import axios from 'axios';
import { useState} from 'react';

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);


  const changeSearch = (value) =>{
    setSearch(value);
  }

  const searchweatherHandler = () =>{
    if (search !== "") {
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6e7efb41935a13d2c78dfad03e7d1f99&units=metric`
      )
      .then((response)=>{
          console.log(response.data);
          setWeather(response.data);
      })
      .catch(
        (error) => {
          console.log(error.response.data);
        }
      )
  }
}

  
  
  return (
    <>
      <Search searchData={search} eventHandler={changeSearch} searchweather={searchweatherHandler}/>
      <Result weatherData={weather}/>
    </>
  )
}

export default App