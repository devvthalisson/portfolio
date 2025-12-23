import { Header } from "./layout/Header";
import { Hero } from "./layout/Hero";
import { About } from "./layout/About";
import { Dev } from "./layout/Dev";
import { Projects } from "./layout/Projects";

function App() {
  return (
    <main className="min-h-screen" id="index">
      <Header />
      <Hero />
      <About />
      <Dev />
      <Projects />
    </main>
  );
}

export default App;
