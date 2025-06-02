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
        scrub: false,
        onEnter() {
          gsap.to(parent.current, {
            visibility: "visible",
            duration: 1,
          });
          gsap.fromTo(
            ".ClientCard",
            {
              opacity: 0,
              y: 100,
              scale: 0.5,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power4.inOut",
              stagger: 0.05,
            }
          );
        },
        onLeaveBack() {
          gsap.to(parent.current, {
            opacity: 0,
            duration: 2,
            onComplete: () => {
              gsap.to(parent.current, {
                opacity: 1,
                visibility: "hidden",
              });
            },
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
