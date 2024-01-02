/** @format */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarContainer from "./Components/Navbar";
import Slider from "./Components/Slider";
// import Heading from "./Components/Heading";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className='App'>
      <NavbarContainer />
      <Slider />
      <About />
      <Services />
      <Team />
      <Contact />
    </div>
  );
}

export default App;
