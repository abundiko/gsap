import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex gap-6 container mx-auto my-12">
        <Link href={"/split-text"}>Split Text</Link>
        <Link href={"/team"}>The Team</Link>
        <Link href={"/kesh"}>MistaKesh</Link>
      </div>
    </main>
  );
}
