import React from 'react'

const  ButtonComponent = ({btnClass, text, onClick}) => {
  return (
   <button onClick={onClick}  className={btnClass}>{text}</button>
  )
}

export default ButtonComponent