import { axios } from "axios";
const todoAPI = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoList,
  getTodoByID,
};

function createTodo(todo) {
  return axios.post(`${URL.BASE}todos`, todo);
}

function updateTodo(todo) {
  return axios.put(`${URL.BASE}todos/${todo.id}`, todo);
}

function deleteTodo(id) {
  return axios.delete(`${URL.BASE}todos/${id}`);
}

function getTodoList() {
  return axios.get(`${URL.BASE}todos`);
}

function getTodoByID(id) {
  return axios.get(`${URL.BASE}todos/${id}`);
}

export default todoAPI;
