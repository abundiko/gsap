"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BigKesh() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#BigKeshImage",
      start: "bottom 90%",
      end: "bottom 80%",
      pin: true,
      onUpdate(st) {
        const pg = st.progress;
        const scale = pg * 4 + 1;
        const trx = pg * 50;

        gsap.to(st.trigger!, {
          // height: `${v}%`,
          // width: `${v}%`,
          scale: `${scale}`,
          translateX: `${trx}%`,
          // translateY: `${trx}%`,
        });
      },
    });
  });

  return (
    <div className="relative w-full h-full aspect-[3/4]">
      <Image
        id="BigKeshImage"
        height={400}
        width={350}
        src={"/images/kesh.jpg"}
        alt="Mr Kesh"
        className="h-full w-full absolute object-cover border-8 border-red-950 grayscale z-10"
      />
    </div>
  );
}
