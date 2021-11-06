import axios from 'axios'

const BASE_URL =
  'https://my-json-server.typicode.com/suretrust/fake-tada-server'

const getTodos = () => {
  return axios.get(`${BASE_URL}/todos`)
}

const addTodo = todo => {
  return axios.post(`${BASE_URL}/todos`, todo)
}

const deleteTodo = todoId => {
  return axios.delete(`${BASE_URL}/todos/${todoId}`)
}

const updateTodo = todo => {
  return axios.put(`${BASE_URL}/todos/${todo.id}`, todo)
}

const API = {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo
}

export default API
