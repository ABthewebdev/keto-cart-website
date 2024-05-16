"use client";

import { Separator } from "@/components/ui/separator";
import { CartItemWithProduct } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();
  const quantityOptions: JSX.Element[] = [];
  for (let i = 0; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  return (
    <div>
      <Separator className="mb-3" />
      <div className="flex justify-between items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="aspect-square rounded-lg overflow-hidden object-cover"
          height={100}
          width={100}
        />
        <div className="flex justify-end">
          <div className="flex flex-col gap-1">
            <Link
              href={"/products/" + product.id}
              className="flex flex-col font-medium"
            >
              {product.name}
            </Link>
            <div>
              Total: {formatPrice(product.price * quantity)}
              {isPending && <span>Loading ...</span>}
            </div>
          </div>
          <div className="flex justify-self-end">
            <div className="flex flex-col">{formatPrice(product.price)}</div>
            <select
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              <option value={0}>0 (Remove)</option>
              {quantityOptions}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
