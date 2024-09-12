import React from "react";
import style from "./todayRegister.module.scss";

export default function TodayRegister({ lastRegister }) {
  const {
    positive,
    death,
    hospitalizedCurrently,
    inIcuCurrently,
    onVentilatorCurrently,
    deathIncrease,
    positiveIncrease,
    totalTestResults,
    totalTestResultsIncrease,
  } = lastRegister;

  return (
    <div className={style.todayRegister}>
      <div className={style.currentlyCasesCovid19}>
        <h3>Data for March 7, 2021</h3>

        <div className={""}>
          <h3>Cases</h3>

          <div>
            <strong>Total cases</strong>
            <b>{positive}</b>
          </div>

          <div>
            <strong>New cases today</strong>
            <b>{positiveIncrease}</b>
          </div>
        </div>

        <div className={""}>
          <h3>Tests</h3>

          <div>
            <strong>Total test</strong>
            <b>{totalTestResults}</b>
          </div>

          <div>
            <strong>New tests today</strong>
            <b>{totalTestResultsIncrease}</b>
          </div>
        </div>

        <div className={""}>
          <h3>Tests</h3>

          <div>
            <strong>Total test</strong>
            <b>{totalTestResults}</b>
          </div>

          <div>
            <strong>New tests today</strong>
            <b>{totalTestResultsIncrease}</b>
          </div>
        </div>

        <div className={""}>
          <h3>Hospitalization</h3>

          <div>
            <strong>Currently hospitalized</strong>
            <b>{hospitalizedCurrently}</b>
          </div>

          <div>
            <strong>Currently in ICU</strong>
            <b>{inIcuCurrently}</b>
          </div>

          <div>
            <strong>Currently on ventilator</strong>
            <b>{onVentilatorCurrently}</b>
          </div>
        </div>

        {/* <div>
          <div className={style.dataField}>
            <b>Hospitalized Currently</b>
            <b>{hospitalizedCurrently}</b>
          </div>

          <div className={style.dataField}>
            <b>In ICU</b>
            <b>{inIcuCurrently}</b>
          </div>

          <div className={style.dataField}>
            <b>Death Increase</b>
            <b>{deathIncrease}</b>
          </div>

          <div className={style.dataField}>
            <b>Death</b>
            <b>{death}</b>
          </div>
        </div> */}
      </div>
    </div>
  );
}
