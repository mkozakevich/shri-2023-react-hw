"use client";

import LightBlock from "@/app/components/light-block/light-block";
import { Film } from "@/shared/interfaces/Film";
import { Review } from "@/shared/interfaces/Review";
import Image from "next/image";
import styles from "./page.module.scss";
import reviewPhoto from "../../../shared/icons/reviewPhoto.svg";
import {
  useGetReviewsQuery,
  useGetMovieQuery,
} from "@/store/services/movieApi";
import { Counter } from "@/app/components/counter/counter";

export default function FilmPage({ params }: { params: { id: string } }) {
  const movieQuery = useGetMovieQuery(params.id);
  const film: Film = movieQuery.data;
  const isFilmLoading = movieQuery.isLoading;

  const reviewsQuery = useGetReviewsQuery(params.id);
  const reviews: Review[] = reviewsQuery.data;
  const isReviewsLoading = reviewsQuery.isLoading;

  return (
    <>
      {!!isFilmLoading ? (
        <div>...Loading</div>
      ) : (
        <LightBlock>
          <div className={styles.film}>
            <Image
              src={film.posterUrl}
              alt="Poster"
              height={500}
              width={400}
              className={styles.poster}
            ></Image>
            <div className={styles.info}>
              <div className={styles.title}>
                <h2 className="title_2">{film.title}</h2>
                <Counter filmId={film.id}></Counter>
              </div>
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
      )}
      {!!isReviewsLoading ? (
        <div>...Loading</div>
      ) : (
        reviews.map((review, idx) => (
          <div key={idx} className={styles.review}>
            <LightBlock>
              <div className={styles["review__container"]}>
                <div className={styles["review__image-box"]}>
                  <Image
                    src={reviewPhoto}
                    alt="Review image"
                    width={32}
                    height={32}
                  ></Image>
                </div>
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
        ))
      )}
    </>
  );
}
