import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/private-route.module.css";


const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {//Loading?? Display loading...
    return <div>Loading ...</div>;
  }
  if (isAuthenticated !== true) { //If not authenticated, redirect to login page
    return (
      <div className={styles.container}>
        <h1> You are not logged in!</h1>
        <button className={styles.redirect_btn} onClick={() => navigate("/")}>
          Back To Login
        </button>
      </div>
    );
  }
  return <div>{isAuthenticated && <div>{children}</div>}</div>; //If authenticated, display children
};

export default PrivateRoute;
