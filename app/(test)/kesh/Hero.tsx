import Copy from "@/components/Copy";
import Image from "next/image";
import {
  RiBehanceFill,
  RiInstagramFill,
  RiMailFill,
  RiTwitterXFill,
} from "react-icons/ri";
import MorphingText from "./MorphText";

export default function Hero() {
  return (
    <section className="app-container pt-16 select-none">
      <div className="flex justify-between items-center">
        <Copy>
          <h1 className="text-[12vw]">I am Kesh.</h1>
        </Copy>
        <Image
          src={"/images/kesh.jpg"}
          height={300}
          width={300}
          alt="kesh"
          className="rounded-full border-8 border-black aspect-square h-[10vw] w-[10vw] ring-2 ring-white"
        />
      </div>
      <div className="flex text-[8vw]">
        <MorphingText /> &nbsp;Designer
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 items-end">
        <div className="max-w-[500px]">
          {/* <Copy> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In at,
              ipsam beatae nostrum fugiat ad est eveniet temporibus voluptas
              distinctio corporis dolores magni iste quas eaque error earum
              ipsum commodi, aut rerum tempore voluptatem. Assumenda incidunt,
            </p>
          {/* </Copy> */}
        </div>
        <div />
        <div className="flex items-center gap-4 justify-end">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square inline-flex p-3 rounded-full border border-gray-800 hover:border-white text-2xl"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const socials = [
  {
    name: "Twitter X",
    icon: <RiTwitterXFill />,
    href: "https://x.com/kesh_uiux",
  },
  {
    name: "Instagram",
    icon: <RiInstagramFill />,
    href: "https://x.com/kesh_uiux",
  },
  {
    name: "Behance",
    icon: <RiBehanceFill />,
    href: "https://x.com/kesh_uiux",
  },
  {
    name: "Email",
    icon: <RiMailFill />,
    href: "https://x.com/kesh_uiux",
  },
];
