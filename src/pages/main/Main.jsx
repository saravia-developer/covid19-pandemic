import React, { useEffect, useState } from "react";
import Cart from "../../components/cart/Cart";
import { UseData } from "../../hook/UseData";
import styles from './main.module.scss';
import { UseFetch } from "../../hook/UseFetch";
import { endpoints } from "../../utils/endpoints";
import { URL } from "../../utils/config";
import TodayRegister from "../../components/todayRegister/TodayRegister";

export default function Main() {
  const [data, setData] = useState([]);
  const [ lastRegister, setLastRegister ] = useState([]);

  useEffect(() => {
    UseData("currentValuesAllState").then((res) => {
      setData(res);
    });

    UseFetch(`${URL}${endpoints["currentValues"]}`)
    .then(res => { setLastRegister(res[0]) });
  }, []);

  console.log(lastRegister);

  return (
    <div className={styles.main}>
      <TodayRegister lastRegister={lastRegister} />
      
      <div className={styles.perTerritory}>
        {
          data.map(el => (
            <Cart key={el?.state} info={el}/>
          ))
        }
      </div>
    </div>
  );
}
