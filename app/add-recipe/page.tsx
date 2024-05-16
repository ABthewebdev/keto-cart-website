import FormSubmitButton from "@/components/FormSubmitButton";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

async function addRecipe(formData: FormData) {
  "use server";
  const name = formData.get("name")?.toString();
  const rating = Number(formData.get("rating") || 0);
  const imageUrl = formData.get("imageUrl")?.toString();
  const description = formData.get("description")?.toString();

  if (!name || !rating || !imageUrl || !description) {
    throw Error("Missing required fields");
  }
  await prisma.recipe.create({
    data: { name, rating, imageUrl, description },
  });
  redirect("/");
}

export default function AddRecipePage() {
  return (
    <div>
      <h1>Add Recipe</h1>
      <form action={addRecipe}>
        <Input required name="name" placeholder="Name" />
        <Textarea required name="descripton" placeholder="Description" />
        <Input required name="imageUrl" type="url" placeholder="Image Url" />
        <Input required name="rating" type="number" placeholder="Rating" />
        <FormSubmitButton type="submit">Submit Product</FormSubmitButton>
      </form>
    </div>
  );
}
