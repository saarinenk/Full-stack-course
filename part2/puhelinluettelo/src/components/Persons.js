import React from "react";

const Persons = ({ contacts }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {contacts.map(i => (
        <p>
          {i.name} {i.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
