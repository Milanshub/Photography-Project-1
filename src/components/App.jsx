import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portrait from "../pages/Portrait/portrait";
import Home from "../pages/Home";
import Commercial from "../pages/Commercial/Commercial";
import Retouching from "../pages/Retouching/Retouching";
import Services from "../pages/Services/Services";
import Contacts from "../pages/Contacts/Contacts";
import Testimonials from "../pages/Testimonials/Testimonials";
import Nicole from "../pages/Nicole/Nicole";
import Anthe from "../pages/Anthe/Anthe";
import Anna from "../pages/Anna/Anna"
import Anya from "../pages/Anya/Anya";
import Julia from "../pages/Julia/Julia";
import Sofia from "../pages/Sofia/Sofia";
import Yana from "../pages/Yana/Yana";


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
        <Route path="/contacts" element={<Contacts />} />\
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/nicole" element={<Nicole />} />
        <Route path="/anthe" element={<Anthe />} />
        <Route path="/anna" element={<Anna />} /> 
        <Route path="/anya" element={<Anya />} />
        <Route path="/julia" element={<Julia />} />
        <Route path="/sofia" element={<Sofia />} />
        <Route path="/yana" element={<Yana />} />

      </Routes>
     </Router>
    </div>
  );
}

export default App;
