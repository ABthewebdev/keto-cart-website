import Link from "next/link";
import { Input } from "./ui/input";
import { redirect } from "next/navigation";
import NavMenu from "./NavMenu";

const navigation = [
  { name: "Menu", href: "/menu" },
  { name: "Pricing", href: "/pricing" },
  { name: "Recipes", href: "/recipes" },
  { name: "Discounts", href: "/discounts" },
  { name: "Blog", href: "/blog" },
];

async function searchProducts(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Nav({ AuthButton }: any) {
  return (
    <nav className="w-full mb-8">
      <div className="flex gap-2 px-5 pt-3">
        <NavMenu />
        <div className="flex-grow-2 md:flex-1">
          <form className="flex" action={searchProducts}>
            <Input
              className="md:w-72 border border-black"
              name="searchQuery"
              placeholder="Search"
              type="search"
            />
          </form>
        </div>
        <Link
          className="hover:opacity-70 hidden md:flex justify-center"
          href="/"
        >
          <span className="text-xl lusitana-bold">Keto Cart</span>
        </Link>
        <div className="flex flex-1 justify-end">{AuthButton}</div>
      </div>
      <div className="text-center hidden md:block mt-3">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="px-8">
            <span className="text-base font-semibold">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
