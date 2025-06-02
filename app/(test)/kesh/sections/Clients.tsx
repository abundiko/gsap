"use client";

import ClientCard, { ClientCardProps } from "@/components/kesh/ClientCard";
import { useGSAP } from "@gsap/react";

export default function Clients() {
  const half = Math.ceil(clients.length / 2);

  useGSAP(()=>{
    
  }, {
    dependencies: [
      half
    ]
  })
  
  return (
    <section className=" h-full w-full">
      <div className="flex flex-row gap-4 items-stretch h-full justify-between">
        <div className="w-[30vw] flex flex-col gap-4 justify-center px-4 md:px-6">
          {clients.slice(0, half).map((client, i) => (
            <ClientCard key={i} {...client} index={i} />
          ))}
        </div>
        <div className="w-[30vw] flex flex-col gap-4 justify-center px-4 md:px-6">
          {clients.slice(half).map((client, i) => (
            <ClientCard key={i} {...client} index={i} invert />
          ))}
        </div>
      </div>
    </section>
  );
}

const clients: ClientCardProps[] = [
  {
    img: "/images/kesh.jpg",
    title: "Kesh.org",
  },
  {
    img: "/images/kesh.jpg",
    title: "Kesh.org",
  },
  {
    img: "/images/kesh.jpg",
    title: "Kesh.org",
  },
  {
    img: "/images/kesh.jpg",
    title: "Kesh.org",
  },
  {
    img: "/images/kesh.jpg",
    title: "Kesh.org",
  },
  {
    img: "/images/kesh.jpg",
    title: "Kesh.org",
  },
  {
    img: "/images/kesh.jpg",
    title: "Kesh.org",
  },
  {
    img: "/images/kesh.jpg",
    title: "Kesh.org",
  },
];
