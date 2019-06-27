import React from "react";

const Persons = ({ contacts }) => {
  return (
    <div>
      {contacts.map(i => (
        <p>
          {i.name} {i.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
