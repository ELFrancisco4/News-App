import React from "react";
import HeaderComponent from "../atoms/HeaderComponent";
import InputComponent from "../atoms/InputComponent";
import NewsLogo from "../atoms/NewsLogo";
import ButtonComponent from "../atoms/ButtonComponent";
import styles from "../styles/login.module.css";
import image from "../../../images/Login-image.jpg";

function LoginPage() {
  return (
    <div className={styles.container}>
      <img src={image} alt="Login" className={styles.img} />
      <div className={styles.login}>

        <div className={styles.loginHeader}>
          <div className={styles.newsLogo}>
            <NewsLogo svgClass={styles.newsSVG} />
            <p className={styles.logoText}>NEWS APP</p>
          </div>
          <HeaderComponent text={"Hello, welcome"} />
        </div>

        <div className={styles.loginChildren}>
          <div className={styles.inputDiv}>
            <InputComponent
              inputType={"email"}
              placeHolder={"Enter your email"}
              inputClass={styles.email}
              label={"Email:"}
            />
            <InputComponent
              inputType={"password"}
              placeHolder={"Enter your password"}
              inputClass={styles.password}
              label={"Password:"}
            />
          </div>
          <ButtonComponent btnClass={styles.loginBtn} text={"Login"} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
