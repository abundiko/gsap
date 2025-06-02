"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function EndingText() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: textRef.current,
        scrub: 0.4,
        start: "top 50%",
        end: "top top",
        onUpdate(st) {
          gsap.to(textRef.current, {
            opacity: st.progress,
          });
        },
      });
    },
    {
      dependencies: [ref.current, textRef.current],
    }
  );

  return (
    <div ref={ref} className="relative h-[0px] max-h-0 z-0">
      <h2
        ref={textRef}
        className="font-bold text-[9vw] leading-[9vw] absolute bottom-0 left-0 text-center w-full text-gray-900 h-screen grid place-items-center opacity-0"
      >
        Over
        <br />
        200
        <br />
        Happy
        <br />
        Clients
        <br />
      </h2>
    </div>
  );
}
