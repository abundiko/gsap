import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";
import BigKesh from "./BigKesh";

export default function Beauty() {
  return (
    <section className="grid md:grid-cols-4 bg-white overflow-x-clip">
      <div className="p-6 bg-red-950 text-white flex flex-col justify-between">
        <h2 className="font-bold text-7xl text-pretty">Find Beauty in Chaos</h2>
        <p className="text-sm opacity-90 flex flex-wrap items-center gap-2">
          Look at this dude <LuArrowRight />
        </p>
      </div>
      <div className="p-6 bg-white">
        <BigKesh />
      </div>
      <div className="p-6 bg-red-950 text-white flex flex-col justify-between">
        <h2 className="font-bold text-7xl text-pretty">Choose Peace in War</h2>
        <p className="text-sm opacity-90 flex flex-wrap items-center gap-2">
          Ain&apos;t he bandsome? <LuArrowRight />
        </p>
      </div>
      <div className="p-6 bg-white">
        <Image
          height={400}
          width={350}
          src={"/images/wedding/2.jpg"}
          alt="Mr Kesh"
          className="aspect-[3/4] w-full object-cover border-8 border-red-950 grayscale"
        />
      </div>
    </section>
  );
}
