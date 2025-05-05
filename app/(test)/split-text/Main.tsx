"use client";

import Copy from "@/components/Copy";
import CursorBox from "@/components/CursorBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useWindowSize } from "react-use";

export default function SplitTextMain() {
  const { height: vh, width: vw } = useWindowSize();
  const cols = Math.floor(vw / 40);
  const rows = Math.floor(vh / 40);

  const heading = useRef<HTMLHeadingElement>(null);
  const greyBox = useRef<HTMLDivElement>(null);
  const heroBox = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: heroBox.current,
      start: "top top",
      end: "bottom top",
      scrub: 0.4,
      onUpdate(st) {
        const scale = (st.progress + 1) * 1.2;
        gsap.to(heading.current, {
          scale,
        });
      },
    });
  });

  useGSAP(() => {
    // gsap
    const split = SplitText.create(heading.current, {
      type: "chars",
      charsClass: "hmm",
      onSplit(splitText) {
        gsap.fromTo(
          splitText.chars,
          {
            scale: 0.2,
            opacity: 0,
            rotate: 20,
            repeat: 3,
            y: 20,
            x: -10,
            skewX: 100,
          },
          {
            stagger: 0.06,
            scale: 1,
            opacity: 1,
            rotate: 0,
            y: 0,
            x: 0,
            skewX: 0,
            onComplete: () => {
              split.revert();
            },
          }
        );
      },
    });
    // console.log(split.chars.length);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: greyBox.current,
        start: "-50% center",
        end: "top top",
        scrub: 1,
        // onUpdate(st) {
        //   // console.log(st.progress);
        // },
        // pin: true,
        // pinSpacing: false,
        markers: true,
      },
    });

    tl.fromTo(
      greyBox.current,
      {
        backgroundColor: "black",
      },
      {
        backgroundColor: "#220000",
      }
    );
  });

  return (
    <>
      <div ref={heroBox} className="grid h-screen place-items-center">
        <h1
          ref={heading}
          className="heading text-4xl font-semibold [&_.hmm]:underline"
        >
          This is me testing out GSAP
        </h1>
      </div>
      <div
        ref={greyBox}
        className="grid h-screen place-items-center bg-gray-600"
      >
        <Copy>
          <h3 className="text-3xl text-blue-50">
            I <br />
            AM <br />
            THE <br />
            GUY <br />
          </h3>
        </Copy>
      </div>
      <section className="relative">
        <div className="grid relative h-screen place-items-center  bg-blue-800">
          <h1
            // ref={heading}
            className="heading text-4xl md:text-7xl uppercase font-bold [&_.hmm]:underline text-center"
          >
            Designed <br />
            by <br />
            Abundiko
          </h1>
        </div>
        <div
          // ref={greyBox}
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          }}
          className="grid h-full items-stretch justify-stretch overflow-hidden absolute inset-0"
        >
          {Array(rows * cols)
            .fill(0)
            .map((_, i) => (
              <CursorBox key={i} />
            ))}
        </div>
      </section>
    </>
  );
}
