import axios from 'axios';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { useState,useEffect } from 'react';
function App() {


  const apikey ="04964085557897c6bfb3bcecef30eb9b"
  const [inputCity,setInputCity] = useState("")
  const [data,setData] =useState({})

  const getWeatherDetails =(cityName) =>{
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey
    axios.get(apiURL).then((res) =>{
      console.log("response",res.data)
      setData(res.data)
    }).catch((err) =>{
      console.log("err",err)
    })
  }

const handleChangeInput =(e) =>{
  setInputCity(e.target.value)

}

const handleSearch = () =>{
  getWeatherDetails(inputCity)
}

useEffect(() =>{
getWeatherDetails("Mumbai")
},[])

  return (
    <div className='col-md-12'>
      <div className='weatherBg'>
      <h2 className='heading'>Weather App</h2>
<div className='d-grid gap-3 col-4 mt-4'>
      <input type="text" className='form-control'onChange={handleChangeInput} value={inputCity}></input>
<button className='btn btn-primary' type='button'onClick={handleSearch}>Search</button>
</div>
      </div>
<div className='col-md-12 test-center mt-5'>

  <div className='shadow rounded weatherResultBox'>
  <img  className='weatherIcon' src='https://media.istockphoto.com/photos/weather-icons-picture-id176986551?s=612x612'></img>

<h3 className='weatherCity'>{data?.name}</h3>
<h3 className='weatherTemp'>{((data?.main?.temp)-273.15).toFixed(2)}°C</h3>

</div>
</div>

    </div>
  );
}
export default App;
