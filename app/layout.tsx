import type { Metadata } from "next";
import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const josefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pelangi Bimbel",
  description: "Hey there, curious minds! 🌈 Dive into a world of exciting learning adventures with Pelangi Bimbel! We're here to make studying super fun for you! Join our friendly tutors on a journey filled with laughter, discovery, and lots of high-fives! From cool subjects to ace exams, we've got everything you need to be a superstar student! Come on, let's learn, laugh, and shine together at Pelangi Bimbel! 🚀✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>{children}</body>
    </html>
  );
}
