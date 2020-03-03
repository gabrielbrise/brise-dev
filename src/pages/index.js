import NavBar from "../components/NavBar.js";
import AboutMe from "../components/AboutMe.js";
import Curriculum from "../components/Curriculum.js";

import { curriculum } from "../data/index.json";

function HomePage() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <AboutMe />
      <Curriculum {...curriculum} />
      <footer className="fixed-bottom webfix">
        <div>Criado por Brise</div>
        <script src="/js/jquery.js" type="text/javascript"></script>
        <script src="/js/bootstrap.min.js" type="text/javascript"></script>
      </footer>
    </>
  );
}

export default HomePage;
