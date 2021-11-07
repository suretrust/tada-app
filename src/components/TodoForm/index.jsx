import React from 'react'
import PropTypes from 'prop-types'
import { BeatLoader } from 'react-spinners'

import './style.css'

const TodoForm = ({
  handleSubmit,
  hideForm,
  setFormState,
  formState,
  buttonText,
  dataTest,
  isProcessing
}) => {
  const handleChange = e => {
    const { name, type, checked, value: eventValue } = e.target
    const value = type === 'checkbox' ? checked : eventValue.slice(0, 110)

    setFormState(fields => ({ ...fields, [name]: value }))
  }

  return (
    <div className='overlay' data-testid={dataTest}>
      <form onSubmit={handleSubmit}>
        <input
          value={formState.title}
          type='text'
          data-testid='title'
          placeholder='Enter todo title'
          name='title'
          id='title'
          onChange={handleChange}
          required
        />
        <textarea
          value={formState.description}
          placeholder='Enter todo description (110 characters max)'
          type='text'
          data-testid='description'
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
            data-testid='completed'
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
              <div className='ml loader-icon'>
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
  }).isRequired,
  dataTest: PropTypes.string
}

export default TodoForm
