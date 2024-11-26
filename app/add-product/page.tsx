import { prisma } from "@/app/domain/foundation/db/prisma";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - Easy2Shop",
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
    <main className="row justify-content-center">
      <div className="col-sm-12 col-md-8">
        <h1 className="">Add Product</h1>
        <form action="">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label className="text-black" htmlFor="name">
                  Name
                </label>
                <input type="text" className="form-control" id="name" required />
              </div>
            </div>
          </div>
           <div className="form-group mb-1">
            <label className="text-black" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              className="form-control"
              id="description"
              cols={30}
              rows={5}
              required
            />
          </div>
          <div className="form-group">
            <label className="text-black" htmlFor="imageUrl">
              ImageUrl
            </label>
            <input type="text" className="form-control" id="imageUrl" required />
          </div>
           <div className="form-group mb-2">
            <label className="text-black" htmlFor="price">
              Price
            </label>
            <input type="number" className="form-control" id="price" required />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </main>
  );
}
