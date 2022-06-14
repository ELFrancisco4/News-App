import { React, useState } from "react";
import styles from "../components/Nav Bar/styles/navigation.module.css";
import NavLogoSVG from "../components/Nav Bar/atoms/NavLogoSVG";
import MenuSVG from "../components/Nav Bar/atoms/MenuSVG";
import InputComponent from "../components/Login Component/atoms/InputComponent";
import ButtonComponent from "../components/Login Component/atoms/ButtonComponent";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";

const NavigationComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // Hamburger menu state
  const { logout, isAuthenticated } = useAuth0(); //Logout function and isAuthenticated value
  //from Auth0
  const navigate = useNavigate(); //Navigate function from react-router-dom
  return (
    <div>
      <nav className={styles.nav}>
        <NavLogoSVG className={styles.nav__logo} />
        <div className={styles.dropdown__menu}>
          <MenuSVG svgClass={styles.menu} onClick={() => setIsOpen(!isOpen)} />
          <ul className={isOpen ? styles.nav__active : styles.nav__list}>
            <li>
              <Link className={styles.nav__links} to={"/home"}>
                Home
              </Link>
              ~
            </li>
            <li>
              {" "}
              <Link className={styles.nav__links} to={"/newsfeed"}>
                News
              </Link>
              ~
            </li>
            <li>
              <Link to={"/profile"} className={styles.nav__links}>
                Profile
              </Link>
              ~
            </li>
            <li>
              <div className={styles.search}>
                <InputComponent
                  inputClass={styles.search__input}
                  inputType={"search"}
                  placeHolder={"Search..."}
                />{" "}
                <ButtonComponent
                  btnClass={styles.search__button}
                  text={"Go!"}
                  onClick={() => navigate("/newsfeed")}
                />
              </div>
            </li>
            {isAuthenticated ? (
              <li>
                <ButtonComponent
                  btnClass={styles.nav__logout}
                  onClick={() => logout()}
                  text={"Logout"}
                />
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationComponent;
