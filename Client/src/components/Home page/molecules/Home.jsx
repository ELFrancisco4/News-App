import { React, useState } from "react";
import newsImg from "../../../Assets/images/Login-image.jpg";
import HeaderComponent from "../../Login Component/atoms/HeaderComponent";
import styles from "../styles/home.module.css";
import ButtonComponent from "../../Login Component/atoms/ButtonComponent";
import SubmitModal from "../../../Pages/SubmitModal";
const Home = () => {
  const [bool, setBool] = useState(false);
  const userChoice = [
    {
      key: "1",
      text: "Football",
    },
    {
      key: "2",
      text: "Security",
    },
    {
      key: "3",
      text: "Politics",
    },
    {
      key: "4",
      text: "Tech",
    },
    {
      key: "5",
      text: "Health",
    },
    {
      key: "6",
      text: "Music",
    },
    {
      key: "7",
      text: "Crypto-currency",
    },
    {
      key: "8",
      text: "Gaming",
    },

    {
      key: "9",
      text: "Law",
    },
  ];

  const clickHandler = (option, button,e) => { // This function is used to indicate that an option has been selected
    if (userChoice.includes(option)) {
      button.style.backgroundColor = "black";
      button.style.color = "orange";
      let index = userChoice.indexOf(option);
      userChoice.splice(index, 1)
    }
  }
  return (
    <>
      <div className={styles.container}>
        <img src={newsImg} alt={newsImg} className={styles.image} />
        <div className={styles.welcome__page}>
          <HeaderComponent text={"Welcome to your Dashboard!"} />
          <p>Personalize your news feed</p>
          <p>Select any 3 topics</p>
          <div className={styles.news__options__grid}>
            {userChoice.map((item) => {
              return (
                <li className={styles.listItem} key={item.key}>
                  <ButtonComponent
                    text={item.text}
                    btnClass={styles.news__options}
                    onClick={(e) => clickHandler(item, e.target)}
                  />
                </li>
              );
            })}
          </div>
          <ButtonComponent
            onClick={() => {
              setBool(true);
            }}
            text={"Submit"}
            btnClass={styles.submit__btn}
          />
          {bool === true ? <SubmitModal bool={bool} /> : null}
        </div>
      </div>
    </>
  );
};

export default Home;
