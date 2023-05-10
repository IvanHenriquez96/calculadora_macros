import Hero from "./components/Hero";
import { Introduccion } from "./components/Introduccion";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <Introduccion />
    </main>
  );
}
