import { LuSparkles } from "react-icons/lu";

export default function Features() {
  return (
    <section className="grid md:grid-cols-4 pt-14 bg-white">
      {items.map((item, i) => {
        const even = i % 2 !== 0;
        return (
          <div
            key={i}
            className={`p-6 py-8 md:py-16 flex flex-col gap-6 ${
              even ? "bg-red-700 text-white" : "bg-white"
            }`}
          >
            <h3 className="text-5xl">{item.icon}</h3>
            <p className="font-semibold text-2xl">{item.title}</p>
            <p className="opacity-80 text-lg font-medium">{item.description}</p>
          </div>
        );
      })}
    </section>
  );
}

const items = [
  {
    icon: <LuSparkles />,
    title: "Blissful",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            sunt? Debitis praesentium obcaecati enim officia error eius
            aspernatur cupiditate consequuntur.`,
  },
  {
    icon: <LuSparkles />,
    title: "Blissful",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            sunt? Debitis praesentium obcaecati enim officia error eius
            aspernatur cupiditate consequuntur.`,
  },
  {
    icon: <LuSparkles />,
    title: "Blissful",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            sunt? Debitis praesentium obcaecati enim officia error eius
            aspernatur cupiditate consequuntur.`,
  },
  {
    icon: <LuSparkles />,
    title: "Blissful",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            sunt? Debitis praesentium obcaecati enim officia error eius
            aspernatur cupiditate consequuntur.`,
  },
];
