"use client";

import { useState } from "react";
import LightBlock from "../components/light-block/light-block";
import styles from "./page.module.scss";
import Image from "next/image";
import arrowImage from "../../shared/icons/arrow.svg";
import classnames from "classnames";
import { questions } from "../../shared/consts/questions";

export default function Faq() {
  const initialState = questions.map(() => false);
  const [state, setStateValue] = useState(initialState);
  const updateState = (index: number) => {
    const updatedState = [...state];
    updatedState[index] = !state[index];

    setStateValue(updatedState);
  };

  return (
    <>
      <LightBlock>
        <h2 className="title-2">Вопросы-ответы</h2>
      </LightBlock>
      {questions.length &&
        questions.map((q, index) => (
          <div className={styles["expandable-block"]} key={index}>
            <LightBlock>
              <div className={styles["title-container"]}>
                <h3 className="title-3">{q.title}</h3>
                <Image
                  className={classnames(
                    styles.arrow,
                    state[index] ? styles.arrow_rotated : ""
                  )}
                  src={arrowImage}
                  alt="Arrow button"
                  height={32}
                  width={32}
                  onClick={() => updateState(index)}
                ></Image>
              </div>
              {!!state[index] && (
                <div className={styles.answer}>{q.answer}</div>
              )}
            </LightBlock>
          </div>
        ))}
    </>
  );
}
