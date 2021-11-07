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
  error: false,
  text: null,
  adding: false,
  deleting: false,
  updating: false
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ALERT_TEXT:
      return { ...state, text: null, error: false }
    case TODOS_FETCH_REQUESTED:
      return { ...state, fetching: true, error: false }
    case TODO_ADD_REQUESTED:
      return { ...state, adding: true, error: false }
    case TODO_DELETE_REQUESTED:
      return { ...state, deleting: true, error: false }
    case TODO_UPDATE_REQUESTED:
      return { ...state, updating: true, error: false }
    case TODOS_FETCH_FAILED:
      return { ...state, fetching: false, error: true, text: action.error }
    case TODO_ADD_FAILED:
      return { ...state, adding: false, error: true, text: action.error }
    case TODO_DELETE_FAILED:
      return { ...state, deleting: false, error: true, text: action.error }
    case TODO_UPDATE_FAILED:
      return { ...state, updating: false, error: true, text: action.error }
    case TODOS_FETCH_SUCCEEDED:
      return { ...state, fetching: false, text: null, todos: action.todos }
    case TODO_ADD_SUCCEEDED:
      return {
        ...state,
        adding: false,
        text: 'Todo added successfully!',
        error: false,
        todos: [action.todo, ...state.todos]
      }
    case TODO_DELETE_SUCCEEDED:
      return {
        ...state,
        deleting: false,
        text: 'Todo deleted successfully!',
        error: false,
        todos: state.todos.filter(todo => todo.id !== action.todoId)
      }
    case TODO_UPDATE_SUCCEEDED:
      return {
        ...state,
        updating: false,
        text: 'Todo updated successfully!',
        error: false,
        todos: state.todos.map(todo =>
          todo.id === action.todo.id ? action.todo : todo
        )
      }
    default:
      return state
  }
}

export default todos
