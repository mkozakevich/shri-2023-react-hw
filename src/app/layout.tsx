import Link from "next/link";
import "./globals.scss";
import { StoreProvider } from "@/store/storeProvider";
import { Header } from "./components/header/header";

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
        <StoreProvider>
          <Header></Header>
          <main>{children}</main>
        </StoreProvider>
        <footer>
          <Link href="/faq">Вопросы-ответы</Link>
          <Link href="/about">О нас</Link>
        </footer>
      </body>
    </html>
  );
}
