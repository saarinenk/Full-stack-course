import React from "react";

const Country = ({ country }) => {
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
    </div>
  );
};

export default Country;
