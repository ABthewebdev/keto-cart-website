"use server";

import { cache } from "react";
import { prisma } from "@/lib/db/prisma";
import notFound from "@/components/not-found";
import { StarIcon } from "lucide-react";
import { Metadata } from "next";
import PriceTag from "@/components/PriceTag";
import AddToBoxButton from "@/app/menu/AddToBoxButton";
import { incrementProductQuantity } from "./actions";
import Image from "next/image";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product?.name + " - Keto Cart",
    description: `Buy some ${product?.name} at Keto Cart`,
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 rounded-xl bg-white items-start max-w-6xl px-8 mx-auto py-6">
      <div className="grid md:grid-cols-5 gap-3 items-start">
        <div className="flex md:hidden items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-2xl lg:text-3xl">{product?.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                {product?.rating}
                <StarIcon className="w-5 h-5 fill-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300" />
              </div>
            </div>
          </div>
          <PriceTag
            price={product?.price || 0}
            className="text-2xl lg:text-3xl font-bold ml-auto"
          />
        </div>
        <div className="md:col-span-4">
          <Image
            src={product?.imageUrl || "/box.svg"}
            alt={product?.name || `picture of ${product?.name}`}
            className="object-cover border md: border-gray-200 rounded-xl overflow-hidden dark:border-gray-800"
            width={450}
            height={300}
          />
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="hidden md:flex items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">{product?.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300" />
              </div>
            </div>
          </div>
          <PriceTag
            price={product?.price || 0}
            className="text-4xl font-bold ml-auto"
          />
        </div>
        <section className="text-center text-lg font-medium">
          <h2>Nutrition Facts</h2>
          {/*
          <Image
            src={product?.nutriFactsUrl || "/box.svg"}
            alt={product?.name || "picture of product name"}
            height={0}
            width={280}
          />
        */}
        </section>
        <form className="grid gap-4 md:gap-10">
          {/* <div className="grid gap-2">
            <Label className="text-base" htmlFor="quantity">
              Quantity
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          <AddToBoxButton
            productId={product?.id || ""}
            incrementProductQuantity={incrementProductQuantity}
          />
        </form>
      </div>
    </div>
  );
}
