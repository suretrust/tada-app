import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { useDispatch, useSelector } from 'react-redux'

import './style.css'
import { getTodosRequestAction } from '../../redux/actions/todo/getTodosAction'
import Loading from '../../components/Loading'
import { CheckSquare, Edit3, MinusSquare, Trash2 } from 'react-feather'
import { deleteTodoRequestAction } from '../../redux/actions/todo/deleteTodoAction'
import { updateTodoRequestAction } from '../../redux/actions/todo/updateTodoAction'
import EditTodo from '../EditTodo'
import { BeatLoader } from 'react-spinners'

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
      <ReactTooltip place='top' type='dark' effect='solid' />
      {showEditForm && (
        <EditTodo todoItem={currentTodo} setShowEditForm={setShowEditForm} />
      )}
      {todos.map(todo => (
        <div
          key={`${todo.id}-${todo.title}`}
          className={`${todo.completed ? 'completed' : ''} single-todo`}
        >
          <h4>{todo.title}</h4>
          {isProcessing && currentTodoId === todo.id ? (
            <div className='center'>
              <BeatLoader size={5} />
            </div>
          ) : (
            <small>{todo.description}</small>
          )}
          {!isProcessing && (
            <div className='icons-box'>
              <Edit3
                onClick={() => handleEditTodo(todo.id)}
                className='mr pointer'
                data-tip='Edit'
                color='white'
                size={40}
              />
              {todo.completed ? (
                <MinusSquare
                  onClick={() => handleTodoCompleted(todo.id)}
                  className='pointer mr'
                  color='white'
                  data-tip='Mark incomplete'
                  size={40}
                />
              ) : (
                <CheckSquare
                  onClick={() => handleTodoCompleted(todo.id)}
                  className='pointer mr'
                  color='white'
                  data-tip='Mark complete'
                  size={40}
                />
              )}
              <Trash2
                onClick={() => handleDeleteTodo(todo.id)}
                className='pointer'
                data-tip='Delete'
                color='red'
                size={40}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default AllTodos
