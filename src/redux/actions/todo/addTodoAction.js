import {
  TODO_ADD_FAILED,
  TODO_ADD_REQUESTED,
  TODO_ADD_SUCCEEDED
} from '../../types/todoTypes'

export const addTodoRequestAction = (todo, handleAddSuccess) => ({
  type: TODO_ADD_REQUESTED,
  todo,
  handleAddSuccess
})

export const addTodoActionSuccess = todo => ({
  type: TODO_ADD_SUCCEEDED,
  todo
})

export const addTodoActionFailure = error => ({
  type: TODO_ADD_FAILED,
  error
})
