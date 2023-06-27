"use client";

import { selectTotalAmount } from "@/store/slices/cart/selector";
import cartIcon from "@/shared/icons/cart.svg";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "./header.module.scss";

export const Header = () => {
  const totalAmount = useSelector((state) => selectTotalAmount(state));

  return (
    <header>
      <Link href="/">Билетопоиск</Link>
      <div className={styles["cart-box"]}>
        {!!totalAmount && <div className={styles.total}>{totalAmount}</div>}
        <Link href="/cart">
          <Image
            className={styles.cart}
            src={cartIcon}
            alt="Cart"
            width={32}
            height={32}
          ></Image>
        </Link>
      </div>
    </header>
  );
};
