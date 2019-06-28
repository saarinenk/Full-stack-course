import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [currWeather, setWeather] = useState("");
  const getWeather = location => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=dea560842d3e852a682f3ea93448017a&units=metric`
      )
      .then(response => {
        setWeather(response.data);
      });
  };

  useEffect(() => {
    getWeather(country.capital);
  }, [country.capital]);

  const temp = currWeather.main ? currWeather.main.temp.toFixed(1) : "";

  const weatherIcon = currWeather.weather ? currWeather.weather[0].icon : "";

  const wind = currWeather.wind
    ? {
        speed: currWeather.wind.speed.toFixed(1),
        direction: currWeather.wind.deg
      }
    : "";

  return (
    <div>
      <h2>{country.name}</h2>
      <p>
        <b>Population:</b> {country.population}
      </p>
      <p>
        <b>Capital:</b> {country.capital}
      </p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(i => (
          <li key={i.name}>{i.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag" className="flag" />
      <h3>Weather in {country.capital}</h3>
      <p>temperature: {temp} &deg;C</p>
      <img
        id="icon"
        src={
          weatherIcon
            ? `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            : ""
        }
        alt={`${country} flag`}
      />
      <p>
        wind: {wind.speed} m/s degree: {wind.direction} &deg;
      </p>
    </div>
  );
};

export default Country;
