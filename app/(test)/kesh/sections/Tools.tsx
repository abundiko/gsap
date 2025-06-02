"use client";

import Copy from "@/components/Copy";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

export default function Tools() {
  const parent = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: parent.current,
        start: "top 90%",
        end: "top bottom",
        scrub: 0.4,
        onEnter() {
          gsap.fromTo(
            ".ToolItem",
            {
              opacity: 0,
              scale: 0,
              y: -100,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.7,
              ease: "power4.inOut",
              stagger: 0.05,
            }
          );
        },
        onEnterBack() {
          gsap.to(".ToolItem", {
            opacity: 0,
            scale: 0,
            y: -100,
          });
        },
      });
    },
    {
      dependencies: [parent.current],
    }
  );

  return (
    <section className="bg-gray-50 min-h-screen app-container py-16">
      <div className="grid gap-6 lg:gap-10">
        <Copy>
          <h2 className="font-bold text-[9vw] leading-[10vw] text-center text-gray-800">
            Industry Standard Tools
          </h2>
        </Copy>
        <div ref={parent} className="flex items-center gap-4 justify-center">
          {tools.map((tool, i) => (
            <div key={i} className="ToolItem grid gap-2 opacity-0">
              <Image
                src={tool.img}
                alt={tool.name}
                height={200}
                width={200}
                className="aspect-square size-24 rounded-[45px] object-cover"
              />
              <p className="text-center text-gray-600">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const tools = [
  {
    name: "Figma",
    img: "/images/figma.webp",
  },
  {
    name: "Adobe XD",
    img: "/images/xd.png",
  },
  {
    name: "Figma",
    img: "/images/figma.webp",
  },
  {
    name: "Adobe XD",
    img: "/images/xd.png",
  },
  {
    name: "Figma",
    img: "/images/figma.webp",
  },
  {
    name: "Adobe XD",
    img: "/images/xd.png",
  },
];
