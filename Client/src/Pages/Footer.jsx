import React from "react";
import styles from "../Styles/footer.module.css";
import ButtonComponent from "../components/Login Component/atoms/ButtonComponent";
import InputComponent from "../components/Login Component/atoms/InputComponent";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {" "}
        <div>
          {" "}
          <label>Name:</label>{" "}
          <InputComponent
            placeHolder={"John Doe..."}
            inputClass={styles.input}
            type="text"
            placeholder="Name"
          />
        </div>
        <div>
          <label>Email:</label>{" "}
          <InputComponent
            placeHolder={"Striker@email.com"}
            inputClass={styles.input}
            type="text"
            placeholder="Email"
          />
        </div>
      </div>

      <ButtonComponent btnClass={styles.submit_btn} text={"Submit"} />
      <p>&copy; 2022, Root@Kali</p>
    </div>
  );
};

export default Footer;
