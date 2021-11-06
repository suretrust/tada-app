import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import TodoForm from '../../components/TodoForm'
import { updateTodoRequestAction } from '../../redux/actions/todo/updateTodoAction'

const initialState = {
  completed: false,
  title: '',
  description: ''
}

const EditTodo = ({ todoItem, setShowEditForm }) => {
  const dispatch = useDispatch()
  const [formState, setFormState] = useState(todoItem)

  const handleUpdateTodo = e => {
    e.preventDefault()
    dispatch(updateTodoRequestAction(formState))
    setFormState(initialState)
    setShowEditForm(false)
  }

  const hideForm = () => {
    setFormState(initialState)
    setShowEditForm(false)
  }

  return (
    <TodoForm
      formState={formState}
      setFormState={setFormState}
      hideForm={hideForm}
      buttonText='Update Todo'
      handleSubmit={handleUpdateTodo}
    />
  )
}

export default EditTodo
