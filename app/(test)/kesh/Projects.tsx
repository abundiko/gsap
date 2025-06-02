"use client";

import Copy from "@/components/Copy";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ReactNode, useRef } from "react";

export default function Projects({ children }: { children: ReactNode }) {
  const projectsRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsParent = useRef<HTMLDivElement>(null);
  const projectsBg = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      // for images slide
      ScrollTrigger.create({
        trigger: projectsParent.current,
        pin: true,
        scrub: true,
        onUpdate(st) {
          const distance =
            ((headingRef.current?.clientWidth ?? 0) +
              (projectsRef.current?.clientWidth ?? 0)) *
            st.progress;
          console.log({ distance });

          gsap.to(projectsRef.current, {
            translateX: -distance,
          });
        },
      });
      // for bg color
      const bgTl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "left left",
          end: "left -80%",
          scrub: 0.4,
        },
      });

      bgTl.fromTo(
        projectsBg.current,
        { backgroundColor: "#ffffff00" },
        { backgroundColor: "#ffffffff" }
      );
    },
    {
      dependencies: [projectsRef, projectsParent, projectsBg],
    }
  );

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-white h-full w-full z-0"
        ref={projectsBg}
      />
      <div ref={projectsParent} className="h-screen py-10  overflow-x-clip z-1">
        <div className="flex items-center relative z-1">
          <div
            className="flex flex-col gap-4 flex-shrink-0 w-[450px] py-40 app-container !pr-8"
            ref={headingRef}
          >
            <Copy>
              <h2 className=" text-[5vw] leading-[5vw]">
                My <br />
                Projects
              </h2>
            </Copy>
            <Copy>
              <h3 className="opacity-20 text-[3vw] leading-[3vw] font-bold">
                Been Building cool stuff since 2022
              </h3>
            </Copy>
          </div>
          <div
            ref={projectsRef}
            className="relative flex gap-4 w-fit flex-shrink-0"
          >
            {projects.map((pro, i) => (
              <ProjectCard key={i} {...pro} />
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

function ProjectCard(props: (typeof projects)[number]) {
  return (
    <div className="w-[300px] h-[60vh] flex-shrink-0">
      <Image
        src={props.img}
        alt=""
        height={300}
        width={300}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

const projects = [
  {
    img: "/images/kesh.jpg",
  },
  {
    img: "/images/man.jpeg",
  },
  {
    img: "/images/kesh.jpg",
  },
  {
    img: "/images/kesh.jpg",
  },
  {
    img: "/images/kesh.jpg",
  },
  {
    img: "/images/kesh.jpg",
  },
  {
    img: "/images/kesh.jpg",
  },
  {
    img: "/images/kesh.jpg",
  },
  {
    img: "/images/kesh.jpg",
  },
  {
    img: "/images/kesh.jpg",
  },
  {
    img: "/images/kesh.jpg",
  },
];
