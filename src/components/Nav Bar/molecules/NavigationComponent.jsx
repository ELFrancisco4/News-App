import React from "react";
import styles from "../styles/navigation.module.css";
import NavLogoSVG from "../atoms/NavLogoSVG";
import LinkComponent from "../atoms/LinkComponent";
import MenuSVG from "../atoms/MenuSVG";
import { useNavigate } from "react-router-dom";

function NavigationComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className={styles.nav}>
        <NavLogoSVG />

        <ul className={styles.nav__list}>
          <MenuSVG svgClass={styles.menu} />
          <li>
            <LinkComponent text={"Home"} />
          </li>
          <li>
            {" "}
            {/* Link */}{" "}
            <LinkComponent
              onClick={() => {
                navigate("newsfeed");
              }}
              text={"News Feed"}
            />
          </li>
          <li>
            {" "}
            <LinkComponent text={"Profile"} />
          </li>
          <li>
            {" "}
            <LinkComponent text={"Contact"} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationComponent;
