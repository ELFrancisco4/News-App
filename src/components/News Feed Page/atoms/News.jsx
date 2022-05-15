import React from 'react'
import styles from '../styles/news-feed.module.css'
const News = ({title,description, url}) => {
  return (
    <div className={styles.news}>
      <div className={styles.news__header}>
        <h3 className={styles.news__title}>{title}</h3>
      </div>
      
      <div className={styles.content}>
       <p>{description}</p>
        <a href={url}>Read more</a>
      </div>
    </div>
  )
}

export default News