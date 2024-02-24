import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Findtutor from "./components/Findtutor";
import Sectionone from "./components/Sectionone";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Findtutor />
      <Sectionone />
    </main>
  );
}
