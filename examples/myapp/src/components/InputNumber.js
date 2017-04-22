import React, { PropTypes } from 'react'

const InputNumber = ({ value, onChange }) => {

  return (
    <input type="text" value={value}
       onChange={(e) => {
           onChange(Number(e.target.value))
       }} />
  )
}

InputNumber.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default InputNumber
