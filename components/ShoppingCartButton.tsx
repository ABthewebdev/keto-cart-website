import { ShoppingCart } from "@/lib/db/cart";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div className="relative inline-flex flex-col">
      <div className="flex items-center cursor-pointer space-x-3 mt-1">
        <ShoppingCartIcon className="size-8 absolute" />
        <div className="flex text-center items-center bg-white border border-black px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-xs relative bottom-3 left-2 rounded-full">
          {cart?.size || 0}
        </div>
      </div>
    </div>
  );
}
