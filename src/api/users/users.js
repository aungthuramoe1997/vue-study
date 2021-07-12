import { axios } from "axios";
const userAPI = {
  createUser,
  updateUser,
  deleteUser,
  getUserList,
  getUserByID,
};

function createUser(user) {
  return axios.post(`${URL.BASE}users`, user);
}

function updateUser(user) {
  return axios.put(`${URL.BASE}users/${user.id}`, user);
}

function deleteUser(id) {
  return axios.delete(`${URL.BASE}users/${id}`);
}

function getUserList() {
  return axios.get(`${URL.BASE}users`);
}

function getUserByID(id) {
  return axios.get(`${URL.BASE}users/${id}`);
}

export default userAPI;
