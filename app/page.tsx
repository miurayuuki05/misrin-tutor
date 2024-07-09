import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Findtutor from "./components/Findtutor";
import Sectionone from "./components/Sectionone";
import Sectiontwo from "./components/Sectiontwo";
import Sectionthree from "./components/Sectionthree";
import Sectionfour from "./components/Sectionfour";
import Sectionfive from "./components/Sectionfive";
import News from "./components/News";
import Testimonial from "./components/Testimonial";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Floatcontact from "./components/Whatssapp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Floatcontact />
      <Hero />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
      <News />
      <Testimonial />
      <Location />
      <Footer />
    </main>
  );
}
