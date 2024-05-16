import Link from "next/link";

const navigation = [
  { name: "Menu", href: "/menu" },
  { name: "Pricing", href: "/pricing" },
  { name: "Recipes", href: "/recipes" },
  { name: "Discounts", href: "/discounts" },
  { name: "Blog", href: "/blog" },
];

export default function Sidebar() {
  return (
    <div className="flex w-40 relative gap-y-5 overflow-y-auto border border-gray-200 bg-white px-6 md:hidden pt-6 ">
      <nav className="flex flex-1 flex-col">
        <Link href="/" className="text-base lusitana-bold">
          Keto Cart
        </Link>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              <li className="py-1">
                <Link
                  href="/"
                  className="bg-gray-50 bg-opacity-0 text-base font-semibold"
                >
                  Home
                </Link>
              </li>
              {navigation.map((item) => (
                <li key={item.name} className="py-1">
                  <Link
                    href={item.href}
                    className="bg-gray-50 bg-opacity-0 text-base font-semibold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
