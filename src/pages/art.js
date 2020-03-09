import NavBar from "../components/NavBar.js";
import CardBoard from "../components/CardBoard.js";

import { cardBoard } from "../data/art.json";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <CardBoard {...cardBoard} />

      <footer className="fixed-bottom webfix">
        <div>Criado por Brise</div>
      </footer>
    </>
  );
}

export default HomePage;
