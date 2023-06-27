"use client";

import { Film } from "@/shared/interfaces/Film";
import styles from "./page.module.scss";
import Item from "../components/item/item";
import { useGetMoviesQuery } from "@/store/services/movieApi";
import LightBlock from "../components/light-block/light-block";
import { useSelector } from "react-redux";
import {
  selectTotalAmount,
  selectCartModule,
} from "@/store/slices/cart/selector";

export default function Cart() {
  const { data, isLoading } = useGetMoviesQuery(void 0);
  const films: Film[] = data;
  const totalAmount = useSelector((state) => selectTotalAmount(state));
  const cartState = useSelector((state) => selectCartModule(state));

  return (
    <>
      <div className={styles.cart}>
        {isLoading ? (
          <div>...Loading</div>
        ) : (
          films.map((film, idx) => {
            if (cartState.counters[film.id]) {
              return (
                <div key={idx} className={styles.film}>
                  <Item film={film}></Item>
                </div>
              );
            }
          })
        )}
      </div>
      <LightBlock>
        <div className={styles.total}>
          <div className="title_4">Итого билетов:</div>
          <div className="title_4">{totalAmount}</div>
        </div>
      </LightBlock>
    </>
  );
}
