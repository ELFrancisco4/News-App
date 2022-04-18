import React from "react";
import newsImg from "../../../images/Login-image.jpg";
import HeaderComponent from "../../Login Component/atoms/HeaderComponent";
import styles from "../styles/home.module.css";
import ButtonComponent from "../../Login Component/atoms/ButtonComponent";
function Home() {
  return (
    <>
      <div className={styles.container}>
        <img src={newsImg} alt={newsImg} className={styles.image} />
        <div className={styles.welcome__page}>
          <HeaderComponent text={"Welcome to your Dashboard!"} />
          <p>Personalize your news feed</p>
          <div className={styles.news__options__grid}>
              <ButtonComponent text={"Football"} btnClass={styles.news__options} />
              <ButtonComponent text={"Security"} btnClass={styles.news__options} />
              <ButtonComponent text={"Politics"} btnClass={styles.news__options} />
              <ButtonComponent text={"Tech"} btnClass={styles.news__options} />
              <ButtonComponent text={"Business"} btnClass={styles.news__options} />
              <ButtonComponent text={"Health"} btnClass={styles.news__options} />
              <ButtonComponent text={"Basket Ball"} btnClass={styles.news__options} />
              <ButtonComponent text={"Wildlife"} btnClass={styles.news__options} />
              <ButtonComponent text={"Food"} btnClass={styles.news__options} />
          </div>
          <ButtonComponent text={"Submit"} btnClass={styles.submit__btn} />
        </div>
      </div>
    </>
  );
}

export default Home;
