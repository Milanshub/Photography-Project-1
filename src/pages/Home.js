import About from "../components/About/About";
import Album from "../components/Album/Album";
import ButtonExample from "../components/Album/Button";
import Gallery from "../components/Gallery/Gallery";
import Landingimage from "../components/Landingimage/LandingImage";

function Home(){


    return(
        <div>
           
            <Landingimage />
            <About />
            <Gallery />
            <Album />
            <ButtonExample />
        
        </div>
    )
}

export default Home;