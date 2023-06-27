import { Film } from "@/shared/interfaces/Film";
import styles from './page.module.scss'
import Item from "./components/item/item";

export default async function Home() {
  let films: Film[] = [];
  await fetch("http://localhost:3001/api/movies")
    .then((data) => data.json())
    .then((data) => (films = data)).catch(e => console.log(e));
  return (
    <>
      {films.map((film, idx) => (
        <div key={idx} className={styles.film}>
          <Item film={film}></Item>
        </div>
      ))}
    </>
  );
}
