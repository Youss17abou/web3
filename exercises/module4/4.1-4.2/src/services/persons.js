import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log("fail", error.message);
    });
};

const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log("fail", error.message);
    });
};

const update = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log("fail", error.message);
    });
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log("fail", error.message);
    });
};

export default { getAll, create, update, deletePerson };
