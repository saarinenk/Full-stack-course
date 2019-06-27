import React, { useState } from "react";
import "./App.css";
import Personform from "./components/Personform";
import Persons from "./components/Persons";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setNewFilter] = useState("");

  const addName = event => {
    event.preventDefault();
    if (persons.filter(person => person.name === newName).length !== 0) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
    }
  };

  const filteredContacts = persons.filter(person =>
    person.name.toLowerCase().includes(filterString)
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
    <div class="App">
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
