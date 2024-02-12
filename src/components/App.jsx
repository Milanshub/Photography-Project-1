import Header from "../components/Header/Header"
import Landingimage from "./Landingimage/LandingImage";
import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Album from "./Album/Album";


function App() {
  return (
    <div className="App">
      <Header />
      <Landingimage />
      <About />
      <Gallery />
      <Album />
    </div>
  );
}

export default App;
