import React from "react";
import FeaturedNews from "../atoms/FeaturedNews";
import styles from "../styles/news-feed.module.css";
import News from "./../atoms/News";
function NewsFeed() {
  return (
    <div className={styles.news__feed}>
      <div className={styles.container}>
        <FeaturedNews />
        <div className={styles.news__grid}>
          <News />
          <News />
          <News />
          <News />
          <News />
          <News />
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
