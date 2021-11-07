import {
  TODO_UPDATE_FAILED,
  TODO_UPDATE_REQUESTED,
  TODO_UPDATE_SUCCEEDED
} from '../../types/todoTypes'

export const updateTodoRequestAction = (todo, handleUpdateSuccess) => ({
  type: TODO_UPDATE_REQUESTED,
  todo,
  handleUpdateSuccess
})

export const updateTodoActionSuccess = todo => ({
  type: TODO_UPDATE_SUCCEEDED,
  todo
})

export const updateTodoActionFailure = error => ({
  type: TODO_UPDATE_FAILED,
  error
})
