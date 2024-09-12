import React, { useEffect, useState } from "react";
import style from "./TodayRegister.module.scss";

export default function TodayRegister({ lastRegister }) {
  const { death, hospitalizedCurrently, inIcuCurrently } = lastRegister;

  return (
    <div className={style.todayRegister}>
      <div className={style.currentlyCasesCovid19}>
        <h3>Covid-19 until March 7, 2021</h3>
        <div>
          <div className={style.dataField}>
            <b>HospitalizedCurrently</b>
            <b>{hospitalizedCurrently}</b>
          </div>

          <div className={style.dataField}>
            <b>In ICU</b>
            <b>{inIcuCurrently}</b>
          </div>

          <div className={style.dataField}>
            <b>Death</b>
            <b>{death}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
