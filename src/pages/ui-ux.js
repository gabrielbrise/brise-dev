import NavBar from "../components/NavBar.js";
import CardSection from "../components/CardSection";

import { cardSection } from "../data/ui-ux.json";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <CardSection {...cardSection} />

      <footer className="fixed-bottom webfix">
        <div>Criado por Brise</div>
        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/bootstrap.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/anim_jquery.js"></script>
      </footer>
    </>
  );
}

export default HomePage;
