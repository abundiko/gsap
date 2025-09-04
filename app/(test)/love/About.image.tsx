"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function AboutImage() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#AboutImage",
      start: "top 50%",
      end: "top 20%",
      onUpdate(st) {
        const pg = st.progress;
        const v = 2 - pg * 2;

        gsap.to(st.trigger!, {
          scale: `1.${v}`,
        });
      },
    });
  });

  return (
    <div className="py-10">
      <Image
        id="AboutImage"
        height={600}
        width={1000}
        src={"/images/bh.jpg"}
        alt="Brawlhalla"
        className="w-full aspect-[7/3] mt-10 object-cover scale-[1.2]"
      />
    </div>
  );
}
