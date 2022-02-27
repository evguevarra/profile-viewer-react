import React from 'react'

const Button = ({ color, text, onClick, textColor }) => {
  return (
    <button 
        onClick = {onClick}
        style = {{backgroundColor: color,color:textColor}}
        className="btn">
            {text}
    </button>
  )
}

export default Button