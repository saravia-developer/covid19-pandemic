import React from "react";
import IconCovid19 from "../../assets/logo-covid19.jpg";
import { Link } from "react-router-dom";
import styles from './navbar.module.scss';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["container-navbar"]}>
        <img src={IconCovid19} alt="logo-covid19" />
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <a href="#footer">Contactame</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
