import React from "react";

const Persons = ({ contacts }) => {
  return (
    <div>
      {contacts.map(i => (
        <p key={i.name + i.number}>
          {i.name} {i.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
