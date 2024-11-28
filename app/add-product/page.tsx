import { prisma } from "@/app/domain/foundation/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - Flowmazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <main
      className="row justify-content-center"
      style={{ paddingBlockStart: "180px" }}
    >
      <div className="col-sm-8">
        <h1 className="">Add Product</h1>
        <form action={addProduct} className="">
          <input
            required
            name="name"
            type="text"
            className="w-100 form-control border-0 py-3 mb-4"
            placeholder="Your Name"
          />
          <textarea
            required
            name="description"
            className="w-100 form-control border-0 mb-4"
            rows={5}
            cols={10}
            placeholder="Description"
          />
          <input
            required
            name="imageUrl"
            type="text"
            className="w-100 form-control border-0 py-3 mb-4"
            placeholder="Image Url"
          />
          <input
            required
            name="price"
            type="number"
            className="w-100 form-control border-0 py-3 mb-4"
            placeholder="Price"
          />
          <button
            className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
