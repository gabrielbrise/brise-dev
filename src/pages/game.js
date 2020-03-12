import NavBar from "../components/NavBar.js";
import GameSection from "../components/GameSection.js";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <GameSection />

      <footer className="fixed-bottom webfix">
        <div>Criado por Brise</div>
      </footer>
    </>
  );
}

export default HomePage;
