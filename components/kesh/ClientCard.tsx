import Image from "next/image";

export type ClientCardProps = {
  title: string;
  img: string;
  index?: number;
  invert?: boolean;
};

export default function ClientCard({
  title,
  img,
  index,
  invert = false,
}: ClientCardProps) {
  const cn = !index
    ? ""
    : index % 2 !== 0
    ? invert
      ? "-left-8"
      : "left-8"
    : "";

  return (
    <div
      className={`ClientCard rounded-3xl border border-gray-200 p-4 backdrop-blur-3xl relative ${cn}`}
    >
      <div className="flex gap-4 items-center">
        <Image
          src={img}
          alt={title}
          height={100}
          width={100}
          className="aspect-square size-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-xl md:text-2xl text-gray-700">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
