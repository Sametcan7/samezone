"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import {
  addByQuantity,
  addProduct,
  deleteProduct,
  removeProduct,
  selectAllCart,
} from "../lib/redux/features/cart/cartSlice";

export default function Cart() {
  const productList = useAppSelector(selectAllCart);

  return (
    <div className="my-4 flex justify-between gap-4">
      <div className="w-[calc(100%-300px)] text-text-color">
        <ul className="rounded-lg border-black">
          {productList.map((product) => (
            <Order key={product.id} product={product} />
          ))}
        </ul>
      </div>
      <div className="my-2 h-max w-[250px] rounded-lg border-2 border-black bg-primary-color p-4 text-text-color">
        <p className="mb-4 border-b-2 border-middle-color text-lg font-semibold">
          SELECTED PRODUCTS
        </p>
        <p className="text-2xl font-bold">3.974,95 $</p>

        <button className="mt-4 w-full rounded-lg border-2 border-black bg-middle-color p-1 text-2xl font-bold">
          Confirm
        </button>
      </div>
    </div>
  );
}

function Order({ product }) {
  const [value, setValue] = useState(1);
  const dispatch = useAppDispatch();

  function IncrementwQuantity(e) {
    const value = Number(e.target.value);
    setValue(value);
    dispatch(addByQuantity({ product: product.id, quantity: Number(value) }));
  }

  function Increment() {
    setValue((prev) => Number(prev) + 1);
    dispatch(addProduct(product));
  }
  function Decrement() {
    setValue((prev) => (prev > 1 ? prev - 1 : prev));
    dispatch(deleteProduct({ product: product.id }));
  }

  return (
    <li className="my-2 flex justify-between rounded-lg border-2 border-black bg-primary-color">
      <div className="flex w-full gap-4 rounded-lg px-4 py-2">
        <div>
          <Image
            className="mx-auto aspect-square rounded-lg"
            src={product.image}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="flex w-full flex-col justify-between">
          <p className="font-semibold">{product.title}</p>
          <div className="flex items-center justify-between">
            <div className="flex h-full items-center">
              <button
                onClick={() => Decrement()}
                className="size-8 rounded-lg border-[2px] border-black font-bold">
                -
              </button>
              <input
                className="mx-1 w-6 rounded-lg border-none text-center text-primary-color outline-none"
                value={value}
                onChange={(e) => IncrementwQuantity(e)}
              />
              <button
                onClick={() => Increment()}
                className="size-8 rounded-lg border-[2px] border-black font-bold">
                +
              </button>
            </div>
            <p className="text-2xl font-bold"> {product.price} $</p>
          </div>
        </div>
      </div>
      <div className="mx-8 flex items-center">
        <button onClick={() => dispatch(removeProduct(product.id))}>
          <FaRegTrashAlt className="size-8" />
        </button>
      </div>
    </li>
  );
}
