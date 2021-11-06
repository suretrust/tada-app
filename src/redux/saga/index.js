import { all } from 'redux-saga/effects'
import watchAddTodoSaga from './todo/addTodo'
import watchDeleteTodo from './todo/deleteTodo'
import watchTodosSaga from './todo/getTodos'
import watchUpdateTodoSaga from './todo/updateTodo'

export default function * rootSaga () {
  yield all([
    watchTodosSaga(),
    watchAddTodoSaga(),
    watchDeleteTodo(),
    watchUpdateTodoSaga()
  ])
}
