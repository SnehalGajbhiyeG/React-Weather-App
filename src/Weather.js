import axios from 'axios';
import React, { useState } from 'react'

const Weather = () => { 

    const [city, setCity] = useState(); 
    const [weather, setWeather] = useState();

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'9c24b4561633ce1dfbb2890ea8fe361f'}`)
        console.log(response)
        setWeather(response); 
      } 
      catch(error) {
         console.log('Error in fetching')
      }
    }

    const handleClick = () => {
        fetchWeather(); 
    }

  // const convertToCelsius = (fahrenheit) => {
  //   return ((fahrenheit - 32) * 5 / 9).toFixed(2);
  // };


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10'> 
        <h1 className='text-4xl font-bold text-blue-600 mb-6'>React Weather App</h1>
        <input type="text" 
        className='border border-gray-300 rounded-md p-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400' 
        placeholder='Enter City Name' 
        value={city} onChange={handleCityChange}/>
        <button 
        className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300'
        onClick={handleClick}>Get Weather</button>
        {weather && <>
        <div className='mt-2 text-center'>
          <h3 className='text-2xl font-semibold text-gray-700'>{weather.data.name}</h3>
          <p className='text-xl m-1 text-gray-600'>Temp is {weather.data.main.temp} °F</p>
          <p className='text-lg text-gray-500 capitalize'>{weather.data.weather[0].description}</p>
        </div>
        </>}
    </div>
  )
}

export default Weather