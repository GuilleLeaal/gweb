import Header from "./components/Header";
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import Packs from "./components/sections/Packs";
import Extras from "./components/sections/Extras";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-gweb-text">
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Packs />
        <Extras />
        <Portfolio />
        <Process />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
