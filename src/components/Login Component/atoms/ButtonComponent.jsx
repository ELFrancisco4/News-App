import React from 'react'

function ButtonComponent({btnClass, text}) {
  return (
   <button className={btnClass}>{text}</button>
  )
}

export default ButtonComponent