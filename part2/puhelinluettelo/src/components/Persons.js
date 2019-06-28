import React from "react";

const Persons = ({ contacts, deletePerson }) => {
  const onDelete = (event, person) => {
    event.preventDefault();
    deletePerson(person);
  };

  return (
    <table>
      <tbody>
        {contacts.map(i => (
          <tr key={i.name + i.number + "row"}>
            <td key={i.name + i.number + 1}>{i.name}</td>
            <td key={i.name + i.number + 2}>{i.number}</td>
            <td key={i.name + i.number + 3}>
              <button onClick={e => onDelete(e, i)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Persons;
