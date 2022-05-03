import NavigationComponent from "./Pages/NavigationComponent";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Home from "../src/components/Home page/molecules/Home";
import { Routes, Route } from "react-router-dom";
import NewsFeed from "./Pages/NewsFeed";
const App = () => {
  return (
    <>
      <div className="App">
        <NavigationComponent />
      </div>
    </>
  );
};  

export default App;
