import React from "react";

const Personform = ({ nameChange, numberChange, name, number, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <h3>Add a new contact</h3>
        name: <input value={name} onChange={nameChange} />
        number: <input value={number} onChange={numberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Personform;
