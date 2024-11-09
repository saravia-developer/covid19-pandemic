import React, { useState } from "react";
import Cart from "../../components/cart/Cart";
import UseData from "../../hook/UseData";
import styles from "./main.module.scss";
import UseFetch from "../../hook/UseFetch";
import { endpoints } from "../../utils/endpoints";
import { URL } from "../../utils/config";
import TodayRegister from "../../components/todayRegister/TodayRegister";
import Header from "../../components/header/Header";
import Icons from "../../components/react-icons/Icons";

export default function Main() {
  const { data } = UseData("currentValuesAllState");
  let { fetching } = UseFetch(`${URL}${endpoints["currentValues"]}`);

  const [paginated, setPaginated] = useState(1);
  const itemsPerPage = 9;
  let page = data.slice(
    (paginated - 1) * itemsPerPage,
    paginated * itemsPerPage
  );

  const prevPage = () => setPaginated(paginated - 1);
  const nextPage = () => setPaginated(paginated + 1);

  const quantityPage = Math.ceil(data.length / itemsPerPage);

  const inputPaginated = (e) => {
    e.preventDefault();
    const number = parseInt(e.target.value);

    if (!number || number <= 0 || number == "NaN") {
      setPaginated(1);
    } else if (number >= quantityPage) {
      setPaginated(quantityPage);
    } else {
      setPaginated(number);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.main}>
        {fetching.length > 0 ? (
          <TodayRegister lastRegister={fetching[0]} />
        ) : (
          <p>Loading...</p>
        )}

        <div className={styles.buttonsPaginated}>
          <button onClick={prevPage} disabled={paginated <= 1}>
            <Icons icons={"arrow-left"} /> prev
          </button>

          <input
            type="number"
            min="1"
            max={quantityPage}
            value={paginated}
            onChange={inputPaginated}
          />
          
          <button onClick={nextPage} disabled={quantityPage == paginated}>
            next <Icons icons={"arrow-right"} />
          </button>
        </div>

        <div>
          <p>
            <b>
              Página {paginated} de {quantityPage}
            </b>
          </p>
        </div>

        <div className={styles.perTerritory}>
          {page ? (
            page?.map((el) => <Cart key={el?.state} info={el} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
