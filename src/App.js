import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import NewsAPI from "./Services/NewsAPI";
import Profile from './Pages/Profile';
import NavigationComponent from "./Pages/NavigationComponent";
import PrivateRoute from './Services/auth/private-route';
const App = () => {
  return (
    <div className="App">
      <NavigationComponent/>
       <Routes>
        <Route path="/"  element={<LoginPage />} />
        <Route path="/home" element={<PrivateRoute><HomePage/></PrivateRoute>} />
        <Route path="/newsfeed" element={<PrivateRoute><NewsAPI/></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      </Routes> 
    </div>
  );
};

export default App;
