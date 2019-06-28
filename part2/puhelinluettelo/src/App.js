import React, { useState, useEffect } from "react";
import "./App.css";
import Personform from "./components/Personform";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setNewFilter] = useState("");

  useEffect(() => {
    personService.getPersons().then(initialPersons => {
      setPersons(initialPersons);
    });
  }, []);

  const addName = event => {
    event.preventDefault();
    if (persons.filter(person => person.name === newName).length !== 0) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const person = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      };
      personService.postNew(person).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const filteredContacts = persons.filter(person =>
    person.name.toLowerCase().includes(filterString.toLowerCase())
  );

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = event => {
    setNewFilter(event.target.value);
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} filter={filterString} />
      <Personform
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
        name={newName}
        number={newNumber}
        onSubmit={addName}
      />
      <h2>Numbers</h2>
      <Persons contacts={filteredContacts} />
    </div>
  );
};

export default App;
