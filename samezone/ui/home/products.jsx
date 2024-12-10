"use client";

import { useGetCategoryQuery } from "@/samezone/lib/redux/api/apiSlice";
import Image from "next/image";
import Link from "next/link";

function Products() {
  const { data: electronics } = useGetCategoryQuery("electronics");
  const { data: jewelery } = useGetCategoryQuery("jewelery");

  return (
    <div className="bg- zinc-400 my-4 rounded-2xl">
      <h2 className="my-6 text-center text-3xl font-extrabold text-text-color">
        EXPLORE PRODUCTS
      </h2>
      <div className="flex justify-center gap-4">
        <div className="rounded-xl bg-secondary-color p-4">
          <h3 className="my-2 text-2xl font-bold text-text-color">
            Electronics
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            {electronics
              ? electronics?.slice(0, 2).map((electronic) => (
                  <div
                    key={electronic.id}
                    className="w-[300px] rounded-xl border-2 border-black bg-middle-color p-2">
                    <Link href={`product/${electronic.id}`}>
                      <Image
                        className="mx-auto aspect-square w-full rounded-lg border-2 border-black"
                        width={500}
                        height={500}
                        src={electronic.image}
                        alt=""
                      />
                    </Link>
                    <p className="mt-2 rounded-xl border-2 border-black bg-middle-color p-2">
                      {electronic.title}
                    </p>
                  </div>
                ))
              : Array(2)
                  .fill(null)
                  .map((d, i) => <Loading key={i} />)}
          </div>
        </div>
        <div className="rounded-xl bg-secondary-color p-4">
          <h3 className="my-2 text-2xl font-bold text-text-color">Jewelery</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {jewelery
              ? jewelery.slice(0, 2).map((jewel) => (
                  <div
                    key={jewel.id}
                    className="w-[300px] rounded-xl border-2 border-black bg-middle-color p-2">
                    <Link href={`product/${jewel.id}`}>
                      <Image
                        className="mx-auto aspect-square w-full rounded-lg border-2 border-black"
                        width={500}
                        height={500}
                        src={jewel.image}
                        alt=""
                      />
                    </Link>
                    <p className="mt-2 rounded-xl border-2 border-black bg-middle-color p-2">
                      {jewel.title}
                    </p>
                  </div>
                ))
              : Array(2)
                  .fill(null)
                  .map((d, i) => <Loading key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="w-[300px] animate-pulse rounded-xl border-2 border-black bg-slate-400 p-2">
      <div className="mx-auto aspect-square w-full rounded-lg border-2 border-black bg-gray-600"></div>
      <div className="item-center mt-2 flex flex-col rounded-lg border-2 border-black bg-slate-400">
        <p className="mx-1 my-2 rounded-xl bg-gray-600 p-2"></p>
        <p className="mx-1 my-2 rounded-xl bg-gray-600 p-2"></p>
      </div>
    </div>
  );
}

export default Products;
