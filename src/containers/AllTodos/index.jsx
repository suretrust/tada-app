import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { useDispatch, useSelector } from 'react-redux'

import './style.css'
import { getTodosRequestAction } from '../../redux/actions/todo/getTodosAction'
import Loading from '../../components/Loading'
import { deleteTodoRequestAction } from '../../redux/actions/todo/deleteTodoAction'
import { updateTodoRequestAction } from '../../redux/actions/todo/updateTodoAction'
import EditTodo from '../EditTodo'
import SingleTodo from '../../components/SingleTodo'

const AllTodos = () => {
  const [showEditForm, setShowEditForm] = useState(false)
  const [currentTodo, setCurrentTodo] = useState(false)
  const [currentTodoId, setCurrentTodoId] = useState(0)

  const { todos, fetching, deleting, updating } = useSelector(
    state => state.todos
  )
  const isProcessing = deleting || updating
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodosRequestAction())
  }, [dispatch])

  const handleDeleteTodo = id => {
    setCurrentTodoId(id)
    dispatch(deleteTodoRequestAction(id))
  }

  const handleTodoCompleted = todoId => {
    setCurrentTodoId(todoId)
    const currentTodo = todos.find(todo => todo.id === todoId)
    const updatedTodo = { ...currentTodo, completed: !currentTodo.completed }
    dispatch(updateTodoRequestAction(updatedTodo, () => {}))
  }

  const handleEditTodo = todoId => {
    const todo = todos.find(todo => todo.id === todoId)
    setCurrentTodo(todo)
    setShowEditForm(true)
  }

  if (fetching) return <Loading />
  if (!todos?.length) {
    return (
      <div className='no-todo'>
        You have no TODO item, click the "&#8853;" icon on the bottom right to
        add one.
      </div>
    )
  }

  return (
    <div className='todo-list'>
      {showEditForm && (
        <EditTodo todoItem={currentTodo} setShowEditForm={setShowEditForm} />
      )}
      <ReactTooltip place='top' type='dark' effect='solid' />
      {todos.map(todo => (
        <SingleTodo
          todo={todo}
          key={`${todo.id}-${todo.title}`}
          currentTodoId={currentTodoId}
          isProcessing={isProcessing}
          handleEditTodo={handleEditTodo}
          handleTodoCompleted={handleTodoCompleted}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </div>
  )
}

export default AllTodos
