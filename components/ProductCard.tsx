import { Product } from "@prisma/client";
import Link from "next/link";
import { StarIcon } from "lucide-react";
import PriceTag from "./PriceTag";
import AddToBoxButton from "../app/menu/AddToBoxButton";
import { incrementProductQuantity } from "@/app/menu/products/[id]/actions";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew =
    Date.now() - new Date(product.createdAt).getTime() <
    1000 * 60 * 60 * 24 * 7;
  return (
    <div className="flex flex-col mb-5">
      <Link className="text-center" href={"/menu/products/" + product.id}>
        <Image
          className="rounded-lg"
          src={product.imageUrl}
          alt={product.name}
          height={250}
          width={250}
        />
        <div className="flex flex-1 flex-col p-8 items-center">
          <h2 className="flex text-md font-medium">{product.name}</h2>
          {isNew && (
            <div className="text-center w-14 text-sm font-medium h-7 rounded-2xl p-1 bg-yellow-300">
              NEW
            </div>
          )}
          <div className="flex items-center justify-center gap-x-1">
            <span className="font-medium text-lg">{product.rating}</span>
            <StarIcon className="size-5 fill-yellow-300" />
          </div>
          <PriceTag className="font-medium text-lg" price={product.price} />
        </div>
      </Link>
      <div className="self-center">
        <AddToBoxButton
          productId={product.id}
          incrementProductQuantity={incrementProductQuantity}
        />
      </div>
    </div>
  );
}
