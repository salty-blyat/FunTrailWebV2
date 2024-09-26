import { Navbar } from "@/components/navbar";
import { Hero } from "./components/hero";
import { BentoGrid } from "./components/bento-grid";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mx-auto">
        {/* <BentoGrid /> */}
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
