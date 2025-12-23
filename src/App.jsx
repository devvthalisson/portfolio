import { Header } from "./layout/Header";
import { Hero } from "./layout/Hero";
import { About } from "./layout/About";
import { Dev } from "./layout/Dev";
import { Projects } from "./layout/Projects";
import { HowToWork } from "./layout/HowToWork";
import { Contact } from "./layout/Contact";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <main className="min-h-screen" id="index">
      <Header />
      <Hero />
      <About />
      <Dev />
      <Projects />
      <HowToWork />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
