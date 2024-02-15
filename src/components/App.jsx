import Header from "../components/Header/Header"
// import Landingimage from "./Landingimage/LandingImage";
// import About from "./About/About";
// import Gallery from "./Gallery/Gallery";
// import Album from "./Album/Album";
// import ButtonExample from "./Album/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portrait from "../pages/portrait";
import Home from "../pages/Home";



function App() {
  return (
    <div className="App">

    <Router>
      <Header />
      {/* <Landingimage />
      <About />
      <Gallery />
      <Album />
      <ButtonExample /> */}

    
      <Routes>
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/" element={<Home />} />

      </Routes>
      </Router>
    </div>
  );
}

export default App;
