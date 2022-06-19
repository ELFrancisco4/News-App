import React from "react";
import styles from "../styles/news-feed.module.css";
const FeaturedNews = ({ title, description, url, urlToImage, val }) => {
  return (
    <div className={styles.featured} key={val} >
      <img src={urlToImage} alt={urlToImage} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url}>Read more</a>
    </div>
  );
};

export default FeaturedNews;
