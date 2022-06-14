import React from "react";
import HeaderComponent from "../components/Login Component/atoms/HeaderComponent";
import ButtonComponent from "../components/Login Component/atoms/ButtonComponent";
import styles from "../components/Login Component/styles/login.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className={styles.container}>
      <div className={styles.login_header}>
        <HeaderComponent text={"Hello there! Welcome to Root@Kali news!"} />
        <HeaderComponent text={"Click the button below to get started!"} />
      </div>

      <ButtonComponent
        onClick={() => loginWithRedirect()}
        btnClass={styles.loginBtn}
        text={"Get started"}
      />
    </div>
  );
};

export default LoginPage;
