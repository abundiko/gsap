"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function AfterKesh() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // pre -> appear or dissapear
    ScrollTrigger.create({
      trigger: "#AfterKesh",
      start: "top 85%",
      end: "top 80%",
      pin: true,
      onEnter() {
        gsap.to("#AfterKeshPre", {
          display: "block",
        });
      },
      onLeaveBack() {
        gsap.to("#AfterKeshPre", {
          display: "none",
        });
      },
    });

    ScrollTrigger.create({
      trigger: "#AfterKesh",
      start: "top 85%",
      end: "top 70%",
      pin: true,
      onUpdate(st) {
        gsap.to("#AfterKeshPreBg", {
          opacity: `${st.progress}`,
        });
      },
    });
  });

  return (
    <section
      id="AfterKesh"
      className="app-container py-16 z-20 bg-white relative"
    >
      <div
        id="AfterKeshPre"
        className="h-[100vh]  w-full absolute left-0 bottom-[98%] hidden"
      >
        <div
          id="AfterKeshPreBg"
          className="h-full w-full bg-white opacity-0 app-container flex flex-col justify-end backdrop-blur-2xl"
        >
          <h2 className="font-semibold text-8xl md:w-8/12">
            Head so big you might discover your purpose on sight :)
          </h2>
        </div>
      </div>
    </section>
  );
}
