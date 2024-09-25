import { Hero } from "@/home/components/hero";
import { Navbar } from "@/components/navbar";
import { BentoGrid } from "./components/bento-grid";

const Home = () => {
  return (
    <>
      <Navbar /> 
      <Hero /> 
      <main className="container mx-auto">
        <BentoGrid />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
