import React from 'react'
import styles from '../styles/news-feed.module.css'
function News() {
  return (
    <div className={styles.news}>
      <div className={styles.news__header}>
        <p className={styles.news__title}>Loading...</p>
      </div>
      
      <div className={styles.content}></div>
    </div>
  )
}

export default News