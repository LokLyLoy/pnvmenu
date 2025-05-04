import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Slider from "@/components/Slider/Slider";
import Acne from "@/components/Acne/Acne";
import Footer from "@/components/Footer/Footer";
import LocationGate from "@/components/LocationGate/LocationGate";



export default function Home() {
  return (
      <LocationGate>
          <div className='overflow-x-hidden'>
              <header id='header'>
                  <TopNav/>
                  <Menu/>
              </header>

              <main className='content'>
                  <Slider/>
                  <Acne/>

              </main>

              <footer id='footer'>
                  <Footer/>
              </footer>

          </div>
      </LocationGate>

  );
}
