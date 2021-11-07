import React from 'react'
import RiseLoader from 'react-spinners/RiseLoader'
import PropTypes from 'prop-types'

import './style.css'

const Loading = ({ size }) => {
  return (
    <div className="loader">
      <RiseLoader size={size} color="white" />
    </div>
  )
}

Loading.propTypes = {
  size: PropTypes.number
}

export default Loading
