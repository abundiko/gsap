import { Lenis } from "lenis/react";
import Hero from "./Hero";
import Projects from "./Projects";
import EndingText from "./EndingText";
import LastSections from "./LastSections";
import Tools from "./sections/Tools";

export default function Page() {
  return (
    <Lenis root>
      <Hero />
      <Projects>
        <EndingText />
      </Projects>
      <LastSections />
      <Tools />
    </Lenis>
  );
}
