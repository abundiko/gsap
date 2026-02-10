import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";
import AboutImage from "./About.image";

export default function About() {
  return (
    <section className="app-container overflow-x-clip py-14 md:py-20 xl:py-28 bg-gradient-to-b from-red-700 to-red-950 text-white">
      <h2 className="font-bold text-7xl">
        You asked for it. <br />
        You Got It!
      </h2>
      <div className="flex justify-end mt-10">
        <div className="w-11/12 md:w-7/12 flex flex-col items-start gap-4">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            in, totam inventore similique quam incidunt, accusamus eos odit,
            odio ipsum pariatur vero commodi quo corrupti ex. Natus quos,
            dolorem doloremque pariatur eligendi architecto reprehenderit,
            explicabo alias blanditiis necessitatibus ipsa accusamus.
          </p>
          <Link
            href={"#"}
            className="bg-white rounded-3xl inline-flex py-3 px-8 justify-center items-center text-black gap-3"
          >
            Take Me To It
            <BsArrowUpRightCircle />
          </Link>
        </div>
      </div>
      <AboutImage />
    </section>
  );
}
