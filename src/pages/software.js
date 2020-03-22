import NavBar from "../components/NavBar.js";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer.js";

import { cardSection } from "../data/software.json";

function HomePage() {
  return (
    <>
      <NavBar />
      <CardSection {...cardSection} />
      <Footer />
    </>
  );
}

export default HomePage;
