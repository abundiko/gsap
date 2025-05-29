"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const texts = ["Product", "Ui & Ux", "Visual"];

const MorphingText: React.FC = () => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const indexRef = useRef<number>(texts.length - 1);
  const morphRef = useRef<number>(0);
  const cooldownRef = useRef<number>(1);
  const lastTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);

      const now = Date.now();
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) {
        morphRef.current += dt;
        const fraction = Math.min(morphRef.current / 2, 1);
        setMorph(fraction);

        if (fraction === 1) {
          cooldownRef.current = 1;
          morphRef.current = 0;
          indexRef.current++;
        }
      } else {
        doCooldown();
      }
    };

    animate();
  }, []);

  const setMorph = (fraction: number) => {
    const i = indexRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    if (!text1 || !text2) return;

    const blur1 = Math.min(8 / (1 - fraction) - 8, 100);
    const blur2 = Math.min(8 / fraction - 8, 100);

    text1.textContent = texts[i % texts.length];
    text2.textContent = texts[(i + 1) % texts.length];

    gsap.set(text1, {
      filter: `blur(${blur1}px)`,
      opacity: Math.pow(1 - fraction, 0.4),
    });

    gsap.set(text2, {
      filter: `blur(${blur2}px)`,
      opacity: Math.pow(fraction, 0.4),
    });
  };

  const doCooldown = () => {
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    if (!text1 || !text2) return;

    gsap.set(text1, { filter: "", opacity: 0 });
    gsap.set(text2, { filter: "", opacity: 1 });
  };

  return (
    <>
      <div
        // id="container"
        // className="absolute inset-0 mx-auto w-screen h-20 [filter:url(#threshold)] [filter:blur(0.6px)]"
        className="relative flex-1 justify-end"
      >
        <span
          id="text1"
          ref={text1Ref}
          className=" w-full absolute tracking-tight right-0 text-right text-yellow-500 select-none"
        ></span>
        <span
          id="text2"
          ref={text2Ref}
          className=" w-full absolute tracking-tight right-0 text-right text-yellow-500 select-none"
        ></span>
      </div>

      <svg id="filters" className="hidden">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default MorphingText;
