import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portrait from "../pages/Portrait/portrait";
import Home from "../pages/Home";
import Commercial from "../pages/Commercial/Commercial";
import Retouching from "../pages/Retouching/Retouching";
import Services from "../pages/Services/Services";


function App() {
  return (
    <div className="App">

    <Router>
      <Header />
   
      <Routes>
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/portrait" element={<Portrait />} />
        <Route path="/" element={<Home />} />
        <Route path="/retouching" element={<Retouching />} /> 
        <Route path="/services" element={<Services />} />
  
      </Routes>
      </Router>
    </div>
  );
}

export default App;
