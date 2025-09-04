import About from "./About";
import AfterKesh from "./AfterKesh";
import Beauty from "./Beauty";
import Features from "./Features";
import Hero from "./Hero";

export default function Page() {
  return (
    <>
      <Hero />
      <div className=" font-serif text-gray-700 overflow-clip">
        <Features />
        <About />
        <Beauty />
        <AfterKesh />
      </div>
    </>
  );
}
