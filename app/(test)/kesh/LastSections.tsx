"use client";

import { useRef } from "react";
import Clients from "./sections/Clients";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LastSections() {
  const parent = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: parent.current,
        start: "top 2%",
        // end: "top 5%",
        markers: true,
        scrub: false,
        onEnter() {
          gsap.to(parent.current, {
            visibility: "visible",
            duration: 2,
          });
        },
        onLeaveBack() {
          gsap.to(parent.current, {
            visibility: "hidden",
            duration: 2,
          });
        },
      });
    },
    {
      dependencies: [parent],
    }
  );

  return (
    <section className="relative z-2">
      <div
        ref={parent}
        className="absolute h-screen w-full  bottom-0 invisible"
      >
        <Clients />
      </div>
    </section>
  );
}
