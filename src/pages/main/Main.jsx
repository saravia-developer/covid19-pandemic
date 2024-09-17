import React, { useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import UseData from "../../hook/UseData";
import styles from "./main.module.scss";
import UseFetch from "../../hook/UseFetch";
import { endpoints } from "../../utils/endpoints";
import { URL } from "../../utils/config";
import TodayRegister from "../../components/todayRegister/TodayRegister";
import Header from "../../components/header/Header";

export default function Main() {

  const { data } = UseData("currentValuesAllState");
  let { fetching } = UseFetch(`${URL}${endpoints["currentValues"]}`);
  
  return (
    <>
      <Header />
      <div className={styles.main}>
        {
          fetching.length > 0 
            ? (<TodayRegister lastRegister={fetching[0]} />) 
            : (<p>Loading...</p>)
        }
        

        <div className={styles.perTerritory}>
          {
            data 
            ? (
              data?.map((el) => <Cart key={el?.state} info={el} />)
            ) 
            : (
              <p>Loading...</p>
            )
          }
        </div>
      </div>
    </>
  );
}
