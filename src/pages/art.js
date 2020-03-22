import NavBar from "../components/NavBar.js";
import CardBoard from "../components/CardBoard.js";
import Footer from "../components/Footer.js";

import { cardBoard } from "../data/art.json";

function HomePage() {
  return (
    <>
      <NavBar />
      <CardBoard {...cardBoard} />
      <Footer />
    </>
  );
}

export default HomePage;
