/* eslint-disable @next/next/no-img-element */
"use client";

import { FaHeart } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#f7f7f7] h-screen w-full text-gray-800">
      <div className="grid grid-cols-7 items-stretch h-full relative">
        <div className="app-container py-14 col-span-4 flex flex-col justify-between">
          <h1 className="font-bold text-[6.2vw] leading-[1] tracking-[2px]">
            Send{" "}
            <span className="text-transparent bg-gradient-to-br from-[#f61a1a] to-[#6c0405] [--webkit-background-clip:text] [background-clip:text]">
              Love
            </span>{" "}
            <br />
            <span>Anytime</span> <br />
            <span>Anywhere</span> <br />
          </h1>
          <p className="font-medium text-2xl font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            sunt? Debitis praesentium obcaecati enim officia error eius
            aspernatur cupiditate consequuntur.
          </p>
        </div>
        <div className=" col-span-3 relative overflow-clip">
          <div className="relative h-full w-full">
            {/* <img
              src="/images/heart.png"
              alt="Illustration"
              className=" w-full h-full object-cover [object-position:20%_0%] blur-2xl animate-ping"
            /> */}
            <img
              src="/images/heart.png"
              alt="Illustration"
              className=" absolute top-[5%] scale-150 aspect-square w-full  object-contain right-[-20%] blur-2xl"
            />
            <img
              src="/images/heart.png"
              alt="Illustration"
              className=" absolute top-[5%] scale-150 aspect-square w-full  object-contain right-[-20%]"
            />
          </div>
          <FaHeart className="absolute top-[10%] left-[10%] text-5xl text-[#f61a1a] blur-xl" />
          <FaHeart className="absolute top-[10%] left-[10%] text-5xl text-[#f61a1a] blur-xs animate-ping" />
          <FaHeart className="absolute bottom-[10%] left-[20%] text-9xl text-[#6c0405] blur-2xl" />
          <FaHeart className="absolute bottom-[10%] left-[20%] text-9xl text-[#6c0405] blur-xs animate-ping" />
        </div>
      </div>
    </section>
  );
}
