'use client';

import { Film } from "@/shared/interfaces/Film";
import styles from "./page.module.scss";
import Item from "./components/item/item";
import { useGetMoviesQuery } from "@/store/services/movieApi";

export default function Home() {
  const { data, isLoading } = useGetMoviesQuery(void 0);
  const films: Film[] = data;

  return (
    <>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        films.map((film, idx) => (
          <div key={idx} className={styles.film}>
            <Item film={film}></Item>
          </div>
        ))
      )}
    </>
  );
}
