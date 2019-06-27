import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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

  const showFiltered = () => {
    console.log(filteredCountries);
    const countrylen = filteredCountries.length;
    if (countrylen < 10 && countrylen > 1) {
      return filteredCountries.map(i => <p key={i.name}>{i.name}</p>);
    } else if (countrylen === 1) {
      return (
        <div>
          <h2>{filteredCountries[0].name}</h2>
          <p>
            <b>Population:</b> {filteredCountries[0].population}
          </p>
          <p>
            <b>Capital:</b> {filteredCountries[0].capital}
          </p>
          <h3>languages</h3>
          <ul>
            {filteredCountries[0].languages.map(i => (
              <li>{i.name}</li>
            ))}
          </ul>
          <img src={filteredCountries[0].flag} alt="flag" className="flag" />
        </div>
      );
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
