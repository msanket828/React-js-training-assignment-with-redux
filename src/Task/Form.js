import React from 'react'

function Form({ placeholder, name }) {
  return (
    <input type="text" className="form-control" placeholder={placeholder} name={name} />
  )
}

export default Form;