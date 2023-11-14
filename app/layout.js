import {  Roboto } from "next/font/google";

import "./globals.scss";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: "Frontend Mentor | Newsletter sign-up form with success message",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
