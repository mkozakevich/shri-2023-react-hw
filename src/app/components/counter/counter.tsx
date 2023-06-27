"use client";

import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/store/slices/cart/selector.js";
import { cartActions } from "@/store/slices/cart/cart";
import styles from "./counter.module.scss";

export const Counter = ({ filmId }: { filmId: string }) => {
  const itemAmount = useSelector((state) => selectProductAmount(state, filmId));
  const dispatch = useDispatch();

  return (
    <div className={styles["counter-box"]}>
      <button
        className={`${styles.button} ${
          styles[itemAmount <= 0 ? "button_disabled" : "button_active"]
        }`}
        onClick={() => {
          if (itemAmount <= 0) {
            return;
          }

          dispatch(cartActions.decrement(filmId));
        }}
      >
        -
      </button>
      <span className="title_4">{itemAmount}</span>
      <button
        className={`${styles.button} ${
          styles[itemAmount >= 30 ? "button_disabled" : "button_active"]
        }`}
        onClick={() => {
          if (itemAmount >= 30) {
            return;
          }

          dispatch(cartActions.increment(filmId));
        }}
      >
        +
      </button>
    </div>
  );
};
