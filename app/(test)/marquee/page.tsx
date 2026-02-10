import MarqueeSlider from "@abundiko/react-marquee";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

export default function Page() {
  return (
    <>
      <div className="h-[300px] bg-green-50">
        <MarqueeSlider
          speed={80}
          axis="-x"
          className=" gap-6"
          pauseOnHover
          fade={"both"}
        >
          {Array(20)
            .fill(1)
            .map((it, i) => (
              <div
                key={i}
                className={`size-14 bg-red-800 border-8 border-white mx-0`}
              >
                {i + 1}
              </div>
            ))}
        </MarqueeSlider>
      </div>
      <div className="h-[300px] bg-green-50 overflow-hidden">
        <Marquee reverse direction="left" className=" gap-6" pauseOnHover fade>
          {Array(20)
            .fill(1)
            .map((it, i) => (
              <div
                key={i}
                className={`size-14 bg-red-800 border-8 border-white mx-0`}
              >
                {i + 1}
              </div>
            ))}
        </Marquee>
      </div>
    </>
  );
}
