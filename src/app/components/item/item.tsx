import { Film } from "@/shared/interfaces/Film";
import LightBlock from "../light-block/light-block";
import styles from "./item.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Counter } from "../counter/counter";

export default function Item({ film }: { film: Film }) {
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
            <Counter filmId={film.id}></Counter>
          </div>
          <div className={styles.genre}>{film.genre}</div>
        </div>
      </div>
    </LightBlock>
  );
}
