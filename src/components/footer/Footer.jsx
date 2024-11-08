import React from "react";
import covid19 from "../../assets/logo-covid19.jpg";
import whatsapp from "../../assets/whatsapp.jpg";
import linkedin from "../../assets/linkedin.jpg";
import gmail from "../../assets/gmail.jpg";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles["container-footer"]}>
        <div>
          <img src={covid19} alt="logo-covid19" />
        </div>

        <div className={styles["contact-me"]}>
          <h4>Contactame</h4>
          <div>
            <a href="https://wa.link/052ryv">
              <img src={whatsapp} alt="logo-whatsapp" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-enrique-saravia-tornero-1150b8253/"
              target="_blank"
            >
              <img src={linkedin} alt="logo-linkedin" />
            </a>
            <a href="mailto:saraviatornero310@gmail.com?Subject=Me%20gusto%20tu%20página%20de%20registro%20covid-19">
              <img src={gmail} alt="logo-gmail" />
            </a>
          </div>
        </div>

        <p className={styles["copyright-clause"]}>
          © 2024 Realizado por Luis Saravia - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
