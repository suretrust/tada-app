import { takeLatest, call, put } from 'redux-saga/effects'

import { TODO_DELETE_REQUESTED } from '../../types/todoTypes'
import API from '../../../api'
import {
  deleteTodoActionFailure,
  deleteTodoActionSuccess
} from '../../actions/todo/deleteTodoAction'

export function * deleteTodo (action) {
  try {
    yield call(API.deleteTodo, action.todoId)
    yield put(deleteTodoActionSuccess(action.todoId))
  } catch (error) {
    yield put(deleteTodoActionFailure(error.message))
  }
}

export default function * watchDeleteTodo () {
  yield takeLatest(TODO_DELETE_REQUESTED, deleteTodo)
}
