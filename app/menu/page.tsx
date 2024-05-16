/**
 * v0 by Vercel.
 * @see https://v0.dev/t/J88xY0B3asg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db/prisma";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import PriceTag from "@/components/PriceTag";
import Image from "next/image";

export default async function Menu() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <div className="sm:px-8 bg-white rounded">
      <section className="flex flex-col items-center pt-4 md:flex-row md:justify-center">
        <Image
          priority
          className="px-3 object-cover rounded-md"
          src={products[0].imageUrl}
          alt={products[0].name}
          height={256}
          width={256}
        />
        <div className="flex flex-col ">
          <h1 className="text-2xl font-medium">{products[0].name}</h1>
          <PriceTag className="font-medium text-xl" price={products[0].price} />
          <Link
            className="bg-yellow-400 w-28 rounded-md p-2 text-center font-medium"
            href={"/menu/products/" + products[0].id}
          >
            Check it out
          </Link>
        </div>
      </section>
      <section className="w-full py-6 md:py-12">
        <div className="container grid justify-center justify-items-center gap-4 px-6 md:gap-8 lg:px-14">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-3xl">Customize Your Box</h2>
            <p className="text-gray-500">
              Select your items for the perfect meal
            </p>
          </div>
          <div>
            <form className="flex items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 w-full md:w-[400px]">
                <Input
                  className="font-normal bg-white text-base w-full"
                  placeholder="Search for food..."
                  type="search"
                />
              </div>
              <Button className="border-black border" type="submit">
                Search
              </Button>
            </form>
          </div>
        </div>
        <div className="my-3 grid grid-cols-1 items-center md:grid-cols-2 xl:grid-cols-3">
          {products.slice(1).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
