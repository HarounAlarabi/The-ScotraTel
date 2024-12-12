import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        alt="Mountains and forests with two cabins"
        placeholder="blur"
        className=" object-fill"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-20 tracking-tight font-normal">
          Welcome to paradise.
        </h1>

        <Link
          href="/cabins"
          className="px-8 py-4 text-primary-50 text-lg font-semibold hover:bg-accent-600 rounded-full border bg-accent-600 transition-all mt-11"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
