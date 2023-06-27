import Link from "next/link";
import "./globals.scss";
import { StoreProvider } from "@/store/storeProvider";
import cartIcon from '../shared/icons/cart.svg'
import Image from "next/image";

export const metadata = {
  title: "Билетопоиск",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <header>
          <Link href="/">Билетопоиск</Link>
          <Image src={cartIcon} alt="Cart" width={32} height={32}></Image>
        </header>
        <main>
          <StoreProvider>{children}</StoreProvider>
        </main>
        <footer>
          <Link href="/faq">Вопросы-ответы</Link>
          <Link href="/about">О нас</Link>
        </footer>
      </body>
    </html>
  );
}
