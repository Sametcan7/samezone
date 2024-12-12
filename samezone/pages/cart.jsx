"use client";

import { useAppSelector } from "../lib/redux/hooks";
import { selectAllCart } from "../lib/redux/features/cart/cartSlice";
import Order from "../ui/cart/order";
import TotalPrice from "../ui/cart/totalPrice";

export default function Cart() {
  const productList = useAppSelector(selectAllCart);

  return (
    <div>
      {productList.length > 0 ? (
        <div className="my-4 flex max-lg:flex-col justify-between gap-4">
          <div className="w-full lg:w-[calc(100%-300px)] text-text-color">
            <ul className="rounded-lg border-black">
              {productList.map((product) => (
                <Order key={product.id} product={product} />
              ))}
            </ul>
          </div>
          <TotalPrice productList={productList} />
        </div>
      ) : (
        <div>
          <p className="my-40 text-center text-3xl font-bold">
            Your cart is empty
          </p>
        </div>
      )}
    </div>
  );
}
