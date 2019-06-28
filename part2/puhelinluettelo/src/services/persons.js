import axios from "axios";
const baseURL = "http://localhost:3002/persons";

const getPersons = () => {
  const request = axios.get(baseURL);
  return request.then(response => response.data);
};

const postNew = person => {
  const request = axios.post(baseURL, person);
  return request.then(response => response.data);
};

export default { getPersons, postNew };
