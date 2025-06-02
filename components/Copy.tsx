"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { ComponentProps, useRef } from "react";
import { useWindowSize } from "react-use";

export default function Copy({
  children,
}: {
  children: React.ReactElement<ComponentProps<"div">>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  useGSAP(
    () => {
      gsap.registerPlugin(SplitText, ScrollTrigger);
      const split = SplitText.create(ref.current, {
        type: "lines",
        mask: "lines",

        linesClass: " overflow-hidden opacity-0",
        onSplit(splitText) {
          const hiddenTween: gsap.TweenVars = {
            y: "100%",
            x: "-8px",
            rotate: "-20deg",
            opacity: 0,
            transformOrigin: "right",
          };
          const visibleTween: gsap.TweenVars = {
            y: "0%",
            x: "0px",
            rotate: "0deg",
            duration: 0.8,
            stagger: 0.1,
            opacity: 1,
            transformOrigin: "right",
          };

          ScrollTrigger.create({
            trigger: ref.current,
            start: "top 75%",
            end: "bottom top",
            // once: true,
            // markers: true,

            onEnter: () =>
              gsap.fromTo(splitText.lines, hiddenTween, visibleTween),
            onEnterBack: () =>
              gsap.fromTo(splitText.lines, hiddenTween, visibleTween),
            onLeave: () => gsap.to(splitText.lines, hiddenTween),
            onLeaveBack: () => gsap.to(splitText.lines, hiddenTween),
          });
        },
      });

      return () => split.revert();
    },
    {
      scope: ref,
      dependencies: [width],
    }
  );

  return React.cloneElement(children, {
    ref,
  });
}
