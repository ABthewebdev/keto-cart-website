"use client";

import { useState, useTransition } from "react";
import { Button } from "../../components/ui/button";
import { incrementProductQuantity } from "@/app/menu/products/[id]/actions";

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToBoxButton({ productId }: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add To Box
      </Button>
      {isPending && (
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Loading...
        </span>
      )}
      {!isPending && success && <span>Added to Box</span>}
    </div>
  );
}
