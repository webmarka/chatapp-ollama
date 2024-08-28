import type { Metadata } from "next";
import localFont from "next/font/local";
import { THEME } from "./constant";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Chatbot Ollama",
  description: "Offline chatbot application integrated with Ollama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = process.env.NEXT_PUBLIC_THEME ?? THEME ?? 'default';
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} theme-${theme}`}>
        {children}
      </body>
    </html>
  );
}
