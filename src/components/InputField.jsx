import React from 'react'

const InputField = ( {placeholder, type, name}) => {
  return (
    <div>
      <input className='form-input'
        type={type}
        name={name}
        placeholder={placeholder} />
    </div>
  )
}

export default InputField