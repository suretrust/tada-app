import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { X } from 'react-feather'

import './style.css'
import { deleteAlertText } from '../../redux/actions/alert/deleteAlert'

const Alert = () => {
  const { text, error } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const clearAlert = useCallback(() => {
    dispatch(deleteAlertText())
  }, [dispatch])

  useEffect(() => {
    const timer = setTimeout(() => clearAlert(), 3000)

    return () => clearTimeout(timer)
  }, [text, clearAlert])

  if (!text?.length) return null

  return (
    <div className={`${ error ? 'error' : ''} alert`}>
      {text}
      <span className='icon' onClick={clearAlert}>
        <X />
      </span>
    </div>
  )
}

Alert.propTypes = {
  text: PropTypes.string.isRequired
}

export default Alert
