import NavBar from "./components/NavBar";
import Home from './components/Home';
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <h1 >
      <NavBar/>
      <Home />
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
     
    </h1>
  );
}

export default App;
