import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DemoSection from "./components/DemoSection";
import Assistants from "./components/Assistants";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DemoSection />
        <Assistants />
        <Features />
        <UseCases />
      </main>
      <Footer />
    </>
  );
}
