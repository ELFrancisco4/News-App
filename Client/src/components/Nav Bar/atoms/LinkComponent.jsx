import React from 'react'
import styles from '../styles/navigation.module.css'
function LinkComponent({text, linkClass, onClick}) {
  return (
   <a href="/" onClick={onClick} className={styles.nav__links}>{text}</a>
  )
}

export default LinkComponent