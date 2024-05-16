import Link from "next/link";
import Questions from "@/components/FAQ";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="h-screen">
        <div className="flex flex-col text-center justify-center items-center h-96">
          <span className="tracking-wider mb-2 text-xl font-medium">
            Make keto easy by <br className="md:hidden" />
            creating your own box
          </span>
          <Link href="/menu">
            <button
              type="button"
              className="rounded bg-indigo-600 px-5 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Box
            </button>
          </Link>
        </div>
      </main>
      <section className="flex text-center flex-col justify-center px-3 md:px-0">
        <h2 className="text-xl font-medium">What can you get in your box?</h2>
        <div className="flex justify-center gap-12">
          <Image
            className="size-52 md:size-64"
            src="/box.svg"
            alt="meal box"
            width={250}
            height={95}
          />
          <ul className="flex gap-y-1 lg:gap-y-4 flex-col list-disc text-left">
            <li className="text-md font-medium">
              Anything from breakfast foods to our classic keto bread
            </li>
            <li className="text-md font-medium">
              You can get as much food as you need all in one order
            </li>
            <li className="text-md font-medium">
              Everything is free of artificial sweeteners and preservatives
            </li>
            <li className="text-md font-medium">
              We made everything and affordable and suitable for any budget
            </li>
            <li className="text-md font-medium">
              Choose from any serving size from single person to family size
            </li>
          </ul>
        </div>
      </section>
      <Questions />
    </div>
  );
}
