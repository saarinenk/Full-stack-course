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
    const filteredArr = persons.filter(person => person.name === newName);
    if (filteredArr.length !== 0) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, do you want to replace the contact with a new number?`
        )
      ) {
        const p = filteredArr[0];
        const updated = { ...p, number: newNumber };
        personService
          .update(p, updated)
          .then(returnedPerson => {
            setPersons(
              persons.map(p =>
                returnedPerson.id === p.id ? returnedPerson : p
              )
            );
            setNewName("");
            setNewNumber("");
          })
          .catch(error => {
            alert(`the person was already deleted from server`);
            setPersons(persons.filter(person => person.id !== p.id));
          });
      }
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

  const deletePerson = person => {
    if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
      personService
        .deletePerson(person)
        .then(returnedPerson => {
          setPersons(persons.filter(i => i.name !== person.name));
        })
        .catch(err => console.log("error:", err));
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
      <Persons contacts={filteredContacts} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
