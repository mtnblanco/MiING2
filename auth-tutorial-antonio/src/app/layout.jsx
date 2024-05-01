import { Inter } from "next/font/google";

import "@/app/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OhMyBoat!",
  description: "OhMyBoat! Home Page",
  keywords: ['OhMyBoat!', 'trueque barcos', 'trueque vehiculos'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
