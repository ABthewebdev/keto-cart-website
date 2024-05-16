import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import setProductQuantity from "./actions";

export const metadata = {
  title: "Keto Cart - Shopping Cart",
};

export default async function CartPage() {
  const cart = await getCart();
  return (
    <section className="px-4 md:p-0 flex justify-center">
      <Card className="w-full max-w-4xl p-0">
        <CardHeader className="border-b">
          <CardTitle>Cart</CardTitle>
          <CardDescription>Review your order</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {cart?.items.map((cartItem) => (
            <CartEntry
              cartItem={cartItem}
              key={cartItem.id}
              setProductQuantity={setProductQuantity}
            />
          ))}
          {!cart?.items.length && <p>Your cart is empty.</p>}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="font-semibold text-base">
              Subtotal: {formatPrice(cart?.subtotal || 0)}
            </p>
            <Button>Pay now</Button>
          </div>
        </CardContent>
        <CardFooter className="flex items-center gap-4 p-4">
          <div className="flex flex-1 items-center gap-2">
            <ShieldCheckIcon className="h-6 w-6 text-green-500" />
            <div className="text-sm">
              Your connection to this site is secure.
              <Link href="#"> More info</Link>
            </div>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}

function ShieldCheckIcon({ props }: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
