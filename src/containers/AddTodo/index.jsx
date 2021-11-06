import React, { useState } from 'react'
import { PlusCircle } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'

import TodoForm from '../../components/TodoForm'
import { addTodoRequestAction } from '../../redux/actions/todo/addTodoAction'
import './style.css'

const initialState = {
  completed: false,
  title: '',
  description: ''
}

const AddTodo = () => {
  const [showForm, setShowForm] = useState(false)
  const [formState, setFormState] = useState(initialState)

  const dispatch = useDispatch()
  const { adding } = useSelector(state => state.todos)

  const handleAddSuccess = () => {
    setFormState(initialState)
    setShowForm(false)
  }

  const handleAddTodo = e => {
    e.preventDefault()
    dispatch(addTodoRequestAction(formState, handleAddSuccess))
  }

  const hideForm = () => {
    setFormState(initialState)
    setShowForm(false)
  }

  return (
    <>
      <PlusCircle
        onClick={() => setShowForm(true)}
        size={80}
        className='add-todo'
        data-testid='add-icon'
      />
      {showForm && (
        <div data-testid='add-form'>
          <TodoForm
            formState={formState}
            setFormState={setFormState}
            hideForm={hideForm}
            buttonText={adding ? 'Adding Todo' : 'Add Todo'}
            isProcessing={adding}
            handleSubmit={handleAddTodo}
          />
        </div>
      )}
    </>
  )
}

export default AddTodo
