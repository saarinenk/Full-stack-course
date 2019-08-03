import axios from "axios";
const baseURL = "/api/persons/";

const getPersons = () => {
  const request = axios.get(baseURL);
  return request.then(response => response.data);
};

const postNew = person => {
  const request = axios.post(baseURL, person);
  return request.then(response => response.data);
};

const deletePerson = person => {
  console.log("deleting", person);
  const request = axios.delete(baseURL + person.id);
  return request.then(response => response.data);
};

const update = (person, updatedPerson) => {
  const request = axios.put(baseURL + person.id, updatedPerson);
  return request.then(response => response.data);
};

export default { getPersons, postNew, deletePerson, update };
