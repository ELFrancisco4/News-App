import React from 'react'

const  ButtonComponent = ({btnClass, text, onClick, id}) => {
  return (
   <button onClick={onClick} id={id}  className={btnClass}>{text}</button>
  )
}

export default ButtonComponent