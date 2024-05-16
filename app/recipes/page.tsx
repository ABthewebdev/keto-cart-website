import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";

const recipesData = [
  {
    id: 1,
    imageUrl: "/omelette.jpg",
    name: "Jalapeno Omelette",
  },
  {
    id: 2,
    imageUrl: "/waffles.webp",
    name: "5 minute waffles",
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
                className="w-56 h-56"
                src={recipe.imageUrl}
                alt={recipe.name}
                width={220}
                height={220}
              />
              <h2>{recipe.name}</h2>
              <div className="flex">
                <StarIcon className="w-4 h-4 fill-yellow-300" />
                <StarIcon className="w-4 h-4 fill-yellow-300" />
                <StarIcon className="w-4 h-4 fill-yellow-300" />
                <StarIcon className="w-4 h-4 fill-yellow-300" />
                <StarIcon className="w-4 h-4 fill-yellow-300" />
              </div>
            </article>
          </Link>
        ))}
      </section>
    </div>
  );
}
