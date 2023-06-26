import styles from "./light-block.module.scss";

export default function LightBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles["light-block"]}>{children}</div>;
}
