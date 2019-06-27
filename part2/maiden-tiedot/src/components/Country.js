import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [currWeather, setWeather] = useState("");
  const getWeather = location => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          location +
          "&APPID=dea560842d3e852a682f3ea93448017a"
      )
      .then(response => {
        setWeather((response.data.main.temp - 273.15).toFixed(1));
      });
  };

  useEffect(() => {
    getWeather(country.name);
  }, []);

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
      <p>{currWeather} &deg;C</p>
    </div>
  );
};

export default Country;
