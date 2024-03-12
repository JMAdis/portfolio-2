import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import PortfolioList from "./containers/PortoflioList/PortfolioList";
import { Projects } from "./data/ProjectInfo";
import Cv from "./components/CV/Cv";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div>
    <Nav />
    <About />
    <Skills />
    <PortfolioList projects={Projects} />
    <Cv />
    <Footer />
  </div>
  )
}

export default App
