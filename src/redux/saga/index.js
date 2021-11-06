import { all } from 'redux-saga/effects'
import watchAddTodoSaga from './addTodo'
import watchDeleteTodo from './deleteTodo'
import watchTodosSaga from './getTodos'
import watchUpdateTodoSaga from './updateTodo'

export default function * rootSaga () {
  yield all([
    watchTodosSaga(),
    watchAddTodoSaga(),
    watchDeleteTodo(),
    watchUpdateTodoSaga()
  ])
}
