import { takeLatest, call, put } from 'redux-saga/effects'

import { TODO_UPDATE_REQUESTED } from '../../types/todoTypes'
import API from '../../../api'
import {
  updateTodoActionFailure,
  updateTodoActionSuccess
} from '../../actions/todo/updateTodoAction'

export function * updateTodoSaga (action) {
  try {
    const { data } = yield call(API.updateTodo, action.todo)
    yield put(updateTodoActionSuccess(data))
    yield call(action.handleUpdateSuccess)
  } catch (error) {
    yield put(updateTodoActionFailure(error.message))
  }
}

export default function * watchUpdateTodoSaga () {
  yield takeLatest(TODO_UPDATE_REQUESTED, updateTodoSaga)
}
