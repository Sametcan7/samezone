"use client";

import { useEffect, useState } from "react";

function Products() {
  const [electronics, setElectronics] = useState(null);
  const [jewelery, setJewelery] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => json.slice(0, 2))
      .then((arr) => setElectronics(arr));
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => json.slice(0, 2))
      .then((arr) => setJewelery(arr));
  }, []);

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
            {electronics?.map((electronic) => (
              <div className="w-[300px] rounded-xl border-2 border-black bg-middle-color p-2">
                <img
                  className="mx-auto aspect-square w-full rounded-lg border-2 border-black"
                  src={electronic.image}
                />
                <p className="mt-2 rounded-xl border-2 border-black bg-middle-color p-2">
                  {electronic.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-secondary-color p-4">
          <h3 className="my-2 text-2xl font-bold text-text-color">Jewelery</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {jewelery?.map((jewel) => (
              <div className="w-[300px] rounded-xl border-2 border-black bg-middle-color p-2">
                <img
                  className="mx-auto aspect-square w-full rounded-lg border-2 border-black"
                  src={jewel.image}
                />
                <p className="mt-2 rounded-xl border-2 border-black bg-middle-color p-2">
                  {jewel.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
