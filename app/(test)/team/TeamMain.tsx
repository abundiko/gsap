/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { MouseEvent, Ref, useRef } from "react";

export default function TeamMain() {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const namesRef = useRef<HTMLHeadingElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const splitTitleRef = useRef<SplitText>(null);
  const splitNamesRef = useRef<SplitText[]>([]);
  const splitNames = () =>
    splitNamesRef.current.map((splitText) => splitText.chars);
  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);
      splitNamesRef.current = namesRef.current.map((name) => {
        return SplitText.create(name, {
          type: "chars",
          charsClass: "opacity-0",
        });
      });
      splitTitleRef.current = SplitText.create(titleRef.current!, {
        type: "chars",
      });
    },
    {
      dependencies: [namesRef, titleRef],
    }
  );

  function handleImageEnter(i: number, e: MouseEvent) {
    const img = e.target as HTMLImageElement;
    const name = splitNames().find((_, index) => index === i)!;
    const otherNames = splitNames().filter((_, index) => index !== i);
    gsap.to(img, {
      width: "120px",
      ease: "elastic.out(1, 0.5)",
    });
    otherNames.forEach((n) =>
      gsap.to(n, {
        y: "0%",
        opacity: 0,
        duration: 0.05,
        ease: "power2.out",
        stagger: 0.1,
      })
    );
    gsap.to(name, {
      y: "-100%",
      duration: 0.3,
      opacity: 1,
      ease: "power2.out",
      stagger: {
        each: 0.1,
        from: "start",
      },
    });
    gsap.to(splitTitleRef.current!.chars, {
      y: "-100%",
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.1,
    });
  }

  function handleImageLeave(i: number, e: MouseEvent) {
    const img = e.target as HTMLImageElement;
    // const name = splitNames().find((_, index) => index === i)!;
    const otherNames = splitNames().filter((_, index) => index !== i);
    gsap.to(img, {
      width: "80px",
      ease: "elastic.out(1, 0.5)",
    });
    otherNames.forEach((n) =>
      gsap.to(n, {
        y: "0%",
        opacity: 0,
        duration: 0.05,
        ease: "power2.out",
        stagger: 0.1,
      })
    );
  }

  function handleImageContainerLeave() {
    splitNames().forEach((n) =>
      gsap.to(n, {
        y: "0%",
        opacity: 0,
        duration: 0.05,
        ease: "power2.out",
        stagger: 0.1,
      })
    );
    gsap.to(splitTitleRef.current!.chars, {
      y: "0%",
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      stagger: 0.1,
    });
  }

  return (
    <div className="grid gap-4 py-20">
      <div className="grid place-items-center">
        <div
          className="flex gap-2 items-center justify-center h-25"
          onMouseLeave={handleImageContainerLeave}
        >
          {teamMembers.map((member, i) => (
            <img
              ref={
                ((el: HTMLImageElement) => {
                  imagesRef.current[i] = el!;
                  return el!;
                }) as unknown as Ref<HTMLImageElement>
              }
              onMouseEnter={handleImageEnter.bind(null, i)}
              onMouseLeave={handleImageLeave.bind(null, i)}
              alt={member.name}
              key={member.name}
              src={member.img}
              className="w-20 aspect-square rounded-2xl will-change-[width,_height] object-cover cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mt-6 text-center overflow-y-clip relative">
        <h2 className="text-5xl md:text-7xl xl:text-9xl font-bold uppercase invisible relative">
          |
        </h2>
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl xl:text-9xl font-bold uppercase absolute left-1/2 -translate-x-1/2 w-full "
        >
          Meet The Team
        </h2>
        {teamMembers.map((member, i) => (
          <h2
            ref={
              ((el: HTMLHeadingElement) => {
                namesRef.current[i] = el!;
                return el!;
              }) as unknown as Ref<HTMLHeadingElement>
            }
            key={i + member.name}
            className="text-5xl md:text-7xl xl:text-9xl font-bold uppercase absolute left-1/2 -translate-x-1/2 w-full translate-y-full text-blue-300"
          >
            {member.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

const teamMembers = [
  {
    img: "/images/man.jpeg",
    name: "Just Kesh",
  },
  {
    img: "/images/man.jpeg",
    name: "Treasure 56",
  },
  {
    img: "/images/man.jpeg",
    name: "Josh Nwanebi",
  },
  {
    img: "/images/man.jpeg",
    name: "Abundiko KD",
  },
  {
    img: "/images/man.jpeg",
    name: "Chucky Cheese",
  },
];
