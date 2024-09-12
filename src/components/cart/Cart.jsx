import React from "react";
import styles from "./cart.module.scss";
import { Link } from "react-router-dom";
import { stateUS } from "../../utils/statesUS";

export default function Cart({ info }) {
  const { state, hospitalized, totalTestResults, death } = info;

  const hospitalizedPeople = hospitalized
    ? hospitalized.toLocaleString("es-PE")
    : "Not data";

  return (
    <div className={styles.cart}>
      <h4>{stateUS[state]}</h4>
      <div>
        <strong>Total Cases</strong>
        <b>{totalTestResults.toLocaleString("es-PE")}</b>
      </div>

      <div>
        <strong>Hospitalized</strong>
        <b>{hospitalizedPeople}</b>
      </div>

      <div>
        <strong>Death</strong>
        <b>{death.toLocaleString("es-PE")}</b>
      </div>

      <Link to="/">Ver más</Link>
    </div>
  );
}