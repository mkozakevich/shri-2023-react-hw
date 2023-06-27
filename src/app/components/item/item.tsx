"use client";

import { Film } from "@/shared/interfaces/Film";
import LightBlock from "../light-block/light-block";
import styles from "./item.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/store/slices/cart/selector.js";
import { cartActions } from "@/store/slices/cart/cart";

export default function Item({ film }: { film: Film }) {
  const itemAmount = useSelector((state) =>
    selectProductAmount(state, film.id)
  );
  const dispatch = useDispatch();

  return (
    <LightBlock>
      <div className={styles["film__container"]}>
        <Image
          src={film.posterUrl}
          alt="Poster"
          height={120}
          width={100}
          className={styles["film__image"]}
        ></Image>
        <div className={styles["film__info"]}>
          <div className={styles["film__header"]}>
            <Link className="title_4" href={`/film/${film.id}`}>
              {film.title}
            </Link>
            <div className={styles["counter-box"]}>
              <button
                className={`${styles.button} ${
                    styles[itemAmount <= 0 ? "button_disabled" : "button_active"]
                }`}
                onClick={() => {
                  if (itemAmount <= 0) {
                    return;
                  }

                  dispatch(cartActions.decrement(film.id));
                }}
              >
                -
              </button>
              <span className="title_4">{itemAmount}</span>
              <button
                className={`${styles.button} ${
                  styles[itemAmount >= 20 ? "button_disabled" : "button_active"]
                }`}
                onClick={() => {
                  if (itemAmount >= 20) {
                    return;
                  }

                  dispatch(cartActions.increment(film.id));
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.genre}>{film.genre}</div>
        </div>
      </div>
    </LightBlock>
  );
}
