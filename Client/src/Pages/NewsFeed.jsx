import React, { useContext } from "react";
import FeaturedNews from "../components/News Feed Page/atoms/FeaturedNews";
import styles from "../components/News Feed Page/styles/news-feed.module.css";
import News from "../components/News Feed Page/atoms/News";
import { context } from "../Models/context";

const NewsFeed = () => {
  const articles = useContext(context);
  const headline = articles.slice(9);
  return (
    <>
      <div className={styles.news__feed}>
        <div className={styles.container}>
          {headline.map(({ title, urlToImage, description, url }) => {
            return (
              <FeaturedNews
                title={title}
                urlToImage={urlToImage}
                description={description}
                url={url}
              />
            );
          })}
          <div className={styles.news__grid}>
            {articles.map(({ title, description, url }) => {
              return <News title={title} description={description} url={url} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
