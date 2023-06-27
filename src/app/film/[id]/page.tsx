import LightBlock from "@/app/components/light-block/light-block";
import { Film } from "@/shared/interfaces/Film";
import { Review } from "@/shared/interfaces/Review";
import Image from "next/image";
import styles from "./page.module.scss";
import reviewPhoto from "../../../shared/icons/reviewPhoto.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/store/slices/cart/selector.js";
import { cartActions } from "@/store/slices/cart/cart";

export default async function FilmPage({ params }: { params: { id: string } }) {
  const film: Film = await fetch(
    `http://localhost:3001/api/movie?movieId=${params.id}`
  )
    .then((data) => data.json())
    .then((data) => data);

  const reviews: Review[] = await fetch(
    `http://localhost:3001/api/reviews?movieId=${params.id}`
  )
    .then((data) => data.json())
    .then((data) => data);

  return (
    <>
      <LightBlock>
        <div className={styles.film}>
          <Image
            src={film.posterUrl}
            alt="Poster"
            height={500}
            width={400}
          ></Image>
          <div className={styles.info}>
            <h2 className="title_2">{film.title}</h2>
            <div className={styles.property}>
              <span className="title_4">Жанр: </span>
              {film.genre}
            </div>
            <div className={styles.property}>
              <span className="title_4">Год выпуска: </span>
              {film.releaseYear}
            </div>
            <div className={styles.property}>
              <span className="title_4">Рейтинг: </span>
              {film.rating}
            </div>
            <div className={styles.property}>
              <span className="title_4">Режиссер: </span>
              {film.director}
            </div>
            <h4 className={`${styles.description} title_4`}>Описание</h4>
            <div>{film.description}</div>
          </div>
        </div>
      </LightBlock>
      {reviews.map((review, idx) => (
        <div key={idx} className={styles.review}>
          <LightBlock>
            <div className={styles["review__container"]}>
              <Image
                src={reviewPhoto}
                alt="Review image"
                className={styles["review__image"]}
                width={100}
                height={100}
              ></Image>
              <div className={styles["review__info"]}>
                <div className={styles["review__header"]}>
                  <h4 className="title_4">{review.name}</h4>
                  <div className={styles["review__rating"]}>
                    Оценка: <span className="title_4">{review.rating}</span>
                  </div>
                </div>
                <div>{review.text}</div>
              </div>
            </div>
          </LightBlock>
        </div>
      ))}
    </>
  );
}
