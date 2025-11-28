import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { StoreProvider } from "@/store/StoreProvider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Tutor Media - Find Expert Tutors",
  description:
    "Connect with qualified tutors for personalized learning experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
