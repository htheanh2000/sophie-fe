import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/provider";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sophie - Luyện đề cùng Sophie",
  description: "Developed by The Anh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
