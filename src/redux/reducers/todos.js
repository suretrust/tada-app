import {
  DELETE_ALERT_TEXT,
  TODOS_FETCH_FAILED,
  TODOS_FETCH_REQUESTED,
  TODOS_FETCH_SUCCEEDED,
  TODO_ADD_FAILED,
  TODO_ADD_REQUESTED,
  TODO_ADD_SUCCEEDED,
  TODO_DELETE_FAILED,
  TODO_DELETE_REQUESTED,
  TODO_DELETE_SUCCEEDED,
  TODO_UPDATE_FAILED,
  TODO_UPDATE_REQUESTED,
  TODO_UPDATE_SUCCEEDED
} from '../types/todoTypes'

const initialState = {
  fetching: false,
  todos: [],
  error: null,
  text: null
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ALERT_TEXT:
      return { ...state, text: null }
    case TODOS_FETCH_REQUESTED:
    case TODO_ADD_REQUESTED:
    case TODO_DELETE_REQUESTED:
    case TODO_UPDATE_REQUESTED:
      return { ...state, fetching: true, error: null }
    case TODOS_FETCH_FAILED:
    case TODO_ADD_FAILED:
    case TODO_DELETE_FAILED:
    case TODO_UPDATE_FAILED:
      return { ...state, fetching: false, todos: null, error: action.error }
    case TODOS_FETCH_SUCCEEDED:
      return { ...state, fetching: false, text: null, todos: action.todos }
    case TODO_ADD_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        text: 'Todo added successfully!',
        error: null,
        todos: [action.todo, ...state.todos]
      }
    case TODO_DELETE_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        text: 'Todo deleted successfully!',
        error: null,
        todos: state.todos.filter(todo => todo.id !== action.todoId)
      }
    case TODO_UPDATE_SUCCEEDED:
      return {
        ...state,
        fetching: false,
        text: `Todo marked ${
          action.todo.completed ? '' : 'in'
        }complete!`,
        error: null,
        todos: state.todos.map(todo =>
          todo.id === action.todo.id ? action.todo : todo
        )
      }
    default:
      return state
  }
}

export default todos
