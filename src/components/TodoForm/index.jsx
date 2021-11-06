import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
import { BeatLoader } from 'react-spinners'

const TodoForm = ({
  handleSubmit,
  hideForm,
  setFormState,
  formState,
  buttonText,
  isProcessing
}) => {
  const handleChange = e => {
    const { name, type, checked, value: eventValue } = e.target
    const value = type === 'checkbox' ? checked : eventValue.slice(0, 110)

    setFormState(fields => ({ ...fields, [name]: value }))
  }

  return (
    <div className='overlay'>
      <form onSubmit={handleSubmit}>
        <input
          value={formState.title}
          type='text'
          placeholder='Enter todo title'
          name='title'
          id='title'
          onChange={handleChange}
          required
        />
        <textarea
          value={formState.description}
          placeholder='Enter todo description &#10;(110 characters max)'
          type='text'
          name='description'
          onChange={handleChange}
          id='description'
          required
        />
        <label htmlFor='completed' className='status'>
          <input
            checked={formState.completed}
            type='checkbox'
            onChange={handleChange}
            id='completed'
            name='completed'
            placeholder='Completed'
          />
          <span className='check-mark' />
          <span className='label-text'>Completed</span>
        </label>
        <div className='buttons-box'>
          <button onClick={hideForm} type='button'>
            Cancel
          </button>
          <button disabled={isProcessing} type='submit'>
            <span>{buttonText}</span>
            {isProcessing && (
              <div className='ml'>
                <BeatLoader size={5} color='white' />
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hideForm: PropTypes.func.isRequired,
  setFormState: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool,
  buttonText: PropTypes.string.isRequired,
  formState: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default TodoForm
