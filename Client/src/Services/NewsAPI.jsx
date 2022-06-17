import { React, useState, useEffect } from "react";
import { ContextProvider } from "../Models/context";
import Axios from "axios";
import NewsFeed from "../Pages/NewsFeed";

// The News API component fetches data using axios and passes the
//fetched data down the component tree using ContextProvider
const NewsAPI = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // Fetch data from the News API
    const getNewsData = async () => {
      const res = await Axios.get(
        "http://127.0.0.1:5000/api"
      );
      setArticles(res.data.articles);
      console.log(res.data.articles)
    };
    
    getNewsData();
  }, []);

  return (
    <div>
      <ContextProvider value={articles}>
        <NewsFeed />
      </ContextProvider>
    </div>
  );
};

export default NewsAPI;
