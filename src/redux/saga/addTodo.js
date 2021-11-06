import { takeLatest, call, put } from 'redux-saga/effects'

import { TODO_ADD_REQUESTED } from '../types/todoTypes'
import API from '../../api'
import {
  addTodoActionFailure,
  addTodoActionSuccess
} from '../actions/todo/addTodoAction'

export function * addTodoSaga (action) {
  try {
    const { data } = yield call(API.addTodo, action.todo)
    yield put(addTodoActionSuccess(data))
  } catch (error) {
    yield put(addTodoActionFailure('Something went wrong'))
  }
}

export default function * watchAddTodoSaga () {
  yield takeLatest(TODO_ADD_REQUESTED, addTodoSaga)
}
