import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Country from "./components/Country";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterString, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filterString.toLowerCase())
  );

  const handleFilterChange = event => {
    setNewFilter(event.target.value);
  };

  const showInfo = (event, country) => {
    event.preventDefault();
    setNewFilter(country);
  };

  const showFiltered = () => {
    const countrylen = filteredCountries.length;
    if (countrylen < 10 && countrylen > 1) {
      return filteredCountries.map(i => (
        <div key={i.name + "button"}>
          {i.name} <button onClick={e => showInfo(e, i.name)}>More</button>
        </div>
      ));
    } else if (countrylen === 1) {
      return <Country country={filteredCountries[0]} />;
    } else if (countrylen === 0) {
      return <p>No countries match this filter</p>;
    } else {
      return <p>Too many maches, specify another filter</p>;
    }
  };

  return (
    <div className="App">
      Find countries:{" "}
      <input value={filterString} onChange={handleFilterChange} />
      {showFiltered()}
    </div>
  );
};

export default App;
