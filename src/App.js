import "./App.css";
import LoginPage from "./components/Login Component/molecules/LoginPage";
import NavigationComponent from "./components/Nav Bar/molecules/NavigationComponent";
import FeaturedNews from "./components/News Feed Page/atoms/FeaturedNews";
import News from "./components/News Feed Page/atoms/News";
import NewsFeed from "./components/News Feed Page/molecules/NewsFeed";
import {
  Route,
  Routes,
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavigationComponent />
      {/* Configured route */}
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="newsfeed" element={<NewsFeed/>}/>
      </Routes>
      
      {/* <LoginPage/> */}
    </div>
  );
}

export default App;
