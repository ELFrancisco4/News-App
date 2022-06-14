import React from "react";
import Modal from "react-modal";
import ButtonComponent from "../components/Login Component/atoms/ButtonComponent";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/modal.module.css";
Modal.setAppElement("#root");
const SubmitModal = ({ bool }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Modal
        isOpen={bool}
        style={{
          content: {
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            borderRadius: "10px",
          },
        }}
      >
        <p>All set! Move to your news feed:</p>
        <ButtonComponent
          btnClass={styles.navigate__btn}
          onClick={() => navigate("/newsfeed")}
          text={"Go to News Feed"}
        />
      </Modal>
    </div>
  );
};

export default SubmitModal;
