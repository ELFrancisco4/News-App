import "./App.css";
import Home from "./components/Home page/molecules/Home";
import LoginPage from "./components/Login Component/molecules/LoginPage";
import NavigationComponent from "./components/Nav Bar/molecules/NavigationComponent";
import FeaturedNews from "./components/News Feed Page/atoms/FeaturedNews";
import News from "./components/News Feed Page/atoms/News";
import NewsFeed from "./components/News Feed Page/molecules/NewsFeed";

function App() {
  return (
    <div className="App">
      <NavigationComponent />
      <div className="home">
        <Home />
      </div>

      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
