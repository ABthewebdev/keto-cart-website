import FormSubmitButton from "@/components/FormSubmitButton";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Keto Cart",
  description: "Add keto product",
};

async function addProduct(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const rating = Number(formData.get("rating") || 0);
  const imageUrl = formData.get("imageUrl")?.toString();
  // const nutriFactsUrl = formData.get("nutriFactsUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !rating || !imageUrl || !price) {
    throw Error("Missing required fields");
  }
  await prisma.product.create({
    data: { name, rating, imageUrl, price },
  });
  // redirect("/");
}

export default function AddProductPage() {
  return (
    <div className="px-3">
      <form action={addProduct}>
        <Input
          className="border-black border"
          required
          name="name"
          placeholder="Name"
        />
        <Input
          className="border-black border"
          required
          name="rating"
          type="number"
          placeholder="Rating"
        />
        <Input
          className="border-black border"
          required
          name="imageUrl"
          type="url"
          placeholder="Image Url"
        />
        <Input
          className="border-black border"
          required
          name="price"
          type="number"
          placeholder="Price"
        />
        <FormSubmitButton type="submit">Submit Product</FormSubmitButton>
      </form>
    </div>
  );
}
