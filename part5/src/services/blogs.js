import axios from 'axios';
const baseUrl = '/api/blogs/';

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async blog => {
  const request = await axios.put(baseUrl + blog.id, blog);
  return request.data;
};

export default { setToken, getAll, create, update };
