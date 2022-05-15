import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import NewsFeed from "./Pages/NewsFeed";
import { Routes, Route } from "react-router-dom";
import NewsAPI from "./Services/NewsAPI";
const App = () => {
  return (
    <div className="App">
       <Routes>
        <Route path="/"  element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/newsfeed" element={<NewsAPI/>} />
      </Routes> 
    </div>
  );
};

export default App;
