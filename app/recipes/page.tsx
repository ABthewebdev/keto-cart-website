import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";

const recipesData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1494597706938-de2cd7341979?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b21lbGV0dGV8ZW58MHx8MHx8fDA%3D",
    name: "Spinach Omelette",
  },
  {
    id: 2,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1675279010961-8a6679ff03da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvdGVpbiUyMGljZSUyMGNyZWFtfGVufDB8fDB8fHww",
    name: "Protein Ice Cream",
  },
];

export default function recipesPage() {
  return (
    <div>
      <div className="flex items-center flex-col">
        <h1 className="text-xl font-medium">Delicious Recipes</h1>
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
      <section className="flex pt-8 justify-center gap-x-12 flex-wrap">
        {recipesData.map((recipe) => (
          <Link href="/" key={recipe.id}>
            <article className="text-base font-medium">
              <Image
                className="size-56"
                src={recipe.imageUrl}
                alt={recipe.name}
                width={220}
                height={220}
              />
              <h2>{recipe.name}</h2>
              <div className="flex">
                <StarIcon className="size-4 fill-yellow-300" />
                <StarIcon className="size-4 fill-yellow-300" />
                <StarIcon className="size-4 fill-yellow-300" />
                <StarIcon className="size-4 fill-yellow-300" />
                <StarIcon className="size-4 fill-yellow-300" />
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
