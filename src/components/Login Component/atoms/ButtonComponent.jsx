import React from 'react'

const  ButtonComponent = ({btnClass, text}) => {
  return (
   <button className={btnClass}>{text}</button>
  )
}

export default ButtonComponent