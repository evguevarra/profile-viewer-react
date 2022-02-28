import React from 'react'

const Button = ({ color, text, onClick, textColor, variant}) => {
  return (
    <button 
        onClick = {onClick}
        style = {{backgroundColor: color,color:textColor}}
        variant = {variant}
        className="btn">
            {text}
    </button>
  )
}

export default Button