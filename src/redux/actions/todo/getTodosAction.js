import {
  TODOS_FETCH_FAILED,
  TODOS_FETCH_REQUESTED,
  TODOS_FETCH_SUCCEEDED
} from '../../types/todoTypes'

export const getTodosRequestAction = () => ({
  type: TODOS_FETCH_REQUESTED
})

export const getTodosActionSuccess = todos => ({
  type: TODOS_FETCH_SUCCEEDED,
  todos
})

export const getTodosActionFailure = error => ({
  type: TODOS_FETCH_FAILED,
  error
})
