import React from "react";
import styles from "../styles/navigation.module.css";
import NavLogoSVG from "../atoms/NavLogoSVG";
import LinkComponent from "../atoms/LinkComponent";
import MenuSVG from "../atoms/MenuSVG";
import InputComponent from "../../Login Component/atoms/InputComponent";
import ButtonComponent from "../../Login Component/atoms/ButtonComponent";

function NavigationComponent() {
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
            {/* Link */} <LinkComponent text={"News Feed"} />
          </li>
          <li>
            <div className={styles.search}>
              <InputComponent
                inputClass={styles.search__input}
                inputType={"search"}
                placeHolder={"Search.."}
              />{" "}
              <ButtonComponent btnClass={styles.search__button} text={"Go!"} />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationComponent;
