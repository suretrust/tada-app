import { takeLatest, call, put } from 'redux-saga/effects'

import { TODOS_FETCH_REQUESTED } from '../types/todoTypes'
import API from '../../api'
import { getTodosActionFailure, getTodosActionSuccess } from '../actions/todo/getTodosAction'

export function * getTodosSaga () {
  try {
    const { data } = yield call(API.getTodos)
    yield put(getTodosActionSuccess(data))
  } catch (error) {
    yield put(getTodosActionFailure(error.message))
  }
}

export default function * watchTodosSaga () {
  yield takeLatest(TODOS_FETCH_REQUESTED, getTodosSaga)
}
