import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import ShoppingCartButton from "./ShoppingCartButton";
import { getCart } from "@/lib/db/cart";

export default async function UserAuth() {
  const { userId } = auth();
  const cart = await getCart();
  return (
    <div className="flex justify-center">
      {!userId ? (
        <div>
          <Link href="/sign-in" className="font-bold text-base mr-2">
            Log In<span>&rarr;</span>
          </Link>
        </div>
      ) : (
        <div className="flex gap-x-6 md:gap-x-10">
          <UserButton afterSignOutUrl="/" />
          <Link href="/cart">
            <ShoppingCartButton cart={cart} />
          </Link>
        </div>
      )}
    </div>
  );
}
