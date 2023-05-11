import Hero from "./components/Hero";
import { Introduccion } from "./components/Introduccion";
import { Navbar } from "./components/Navbar";
import { SeccionPasos } from "./components/SeccionPasos";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto">
        <Hero />
        <Introduccion />
        <SeccionPasos />
      </div>
    </main>
  );
}
