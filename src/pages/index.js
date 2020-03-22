import NavBar from "../components/NavBar.js";
import AboutMe from "../components/AboutMe.js";
import Curriculum from "../components/Curriculum.js";
import Footer from "../components/Footer.js";

import { curriculum } from "../data/index.json";

function HomePage() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Curriculum {...curriculum} />
      <Footer />
    </>
  );
}

export default HomePage;
