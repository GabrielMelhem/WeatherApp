import { Weather } from "./Weather";
import { Form } from "./Form";
import "./App.css";
import React, { useState } from "react";

//
const API_KEY = "27f4050de5eaa18b63fe814a20d92367";

export default function App() {
  const [weatherData, setWeatherData] = useState({
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: ""
  });
  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //console.log(city, country);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`
    );
    const data = await response.json();
    //console.log(data);

    if (city && country) {
      setWeatherData({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      setWeatherData({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please Enter Data"
      });
    }
    console.log("weatherData", weatherData);
  };
  return (
    <div className="wrapper">
      <div className="form-container">
        <Form getWeather={getWeather} />
        <Weather
          tempreature={weatherData.tempreature}
          city={weatherData.city}
          country={weatherData.country}
          humidity={weatherData.humidity}
          description={weatherData.description}
          error={weatherData.error}
        />
      </div>
    </div>
  );
}
