import React, { useState } from 'react'
import { PlusCircle } from 'react-feather'
import { useDispatch } from 'react-redux'

import TodoForm from '../../components/TodoForm'
import { addTodoRequestAction } from '../../redux/actions/todo/addTodoAction'
import './style.css'

const initialState = {
  completed: false,
  title: '',
  description: ''
}

const AddTodo = () => {
  const dispatch = useDispatch()
  const [showForm, setShowForm] = useState(false)
  const [formState, setFormState] = useState(initialState)

  const handleAddTodo = e => {
    e.preventDefault()
    dispatch(addTodoRequestAction(formState))
    setFormState(initialState)
    setShowForm(false)
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
      />
      {showForm && (
        <TodoForm
          formState={formState}
          setFormState={setFormState}
          hideForm={hideForm}
          buttonText="Add Todo"
          handleSubmit={handleAddTodo}
        />
      )}
    </>
  )
}

export default AddTodo
