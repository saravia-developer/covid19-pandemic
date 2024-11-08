import React from "react";
import styles from "./territory.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import UseFetch from "../../hook/UseFetch";
import { URL } from "../../utils/config";
import { stateUS } from "../../utils/statesUS";
import Icons from "../../components/react-icons/Icons";

export default function Territory() {
  let params = useParams();
  const { state } = params;
  let { fetching } = UseFetch(`${URL}/v1/states/${state}/current.json`);

  const {
    death,
    hospitalized,
    hospitalizedCurrently,
    positive,
    totalTestResults,
    lastUpdateEt,
  } = fetching;

  const redirect = useNavigate();
  const redirectMainPage = () => redirect("/");

  return (
    <main className={styles.pageMainTerritory}>
      <section className="cart">
        <h1>Detalle del estado de {stateUS[state.toUpperCase()]}</h1>

        {fetching ? (
          <div>
            <p>
              <strong>Última actualización:</strong> {lastUpdateEt}
            </p>
            <p>
              <strong>Fatalidades:</strong> {death}
            </p>
            <p>
              <strong>Personas que fueron hospitalizadas:</strong>{" "}
              {hospitalized}
            </p>
            <p>
              <strong>Personas hospitalizadas actualmente:</strong>{" "}
              {hospitalizedCurrently}
            </p>
            <p>
              <strong>Pruebas positivas:</strong> {positive}
            </p>
            <p>
              <strong>Pruebas totales:</strong> {totalTestResults}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section>
        <button className={styles["btn-navigate-main-page"]} onClick={redirectMainPage}>
          <Icons icons={"arrow-left"} /> Retornar al inicio
        </button>
      </section>
    </main>
  );
}
