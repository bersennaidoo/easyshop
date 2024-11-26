import { prisma } from "@/app/domain/foundation/db/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function CHome() {
    /*const products = await prisma.product.findMany({
      orderBy: { id: "desc" },
    });*/

  return (
    <main className="row">
      <div className="col-sm-12">
      </div>
    </main>
  );
}
