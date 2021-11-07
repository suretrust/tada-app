import {
  TODO_DELETE_FAILED,
  TODO_DELETE_REQUESTED,
  TODO_DELETE_SUCCEEDED
} from '../../types/todoTypes'

export const deleteTodoRequestAction = todoId => ({
  type: TODO_DELETE_REQUESTED,
  todoId
})

export const deleteTodoActionSuccess = todoId => ({
  type: TODO_DELETE_SUCCEEDED,
  todoId
})

export const deleteTodoActionFailure = error => ({
  type: TODO_DELETE_FAILED,
  error
})
