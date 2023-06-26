import Link from "next/link";
import "./globals.scss";

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
          <div></div>
        </header>
        <main>{children}</main>
        <footer>
          <Link href="/faq">Вопросы-ответы</Link>
          <Link href="/about">О нас</Link>
        </footer>
      </body>
    </html>
  );
}
