import {
  addByQuantity,
  addProduct,
  deleteProduct,
  removeProduct,
} from "@/samezone/lib/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/samezone/lib/redux/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Order({ product }) {
  const [value, setValue] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue(product.quantity);
  }, [product.quantity]);

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
    <li className="my-2 flex justify-between rounded-lg border-2 border-black bg-primary-color max-sm:flex-col">
      <div className="flex w-full gap-4 rounded-lg p-1 sm:px-4 sm:py-2">
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
                className="mx-1 w-10 rounded-lg border-none text-center text-primary-color outline-none"
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
      <div className="mx-8 flex items-center max-sm:w-full max-sm:justify-center max-sm:p-4">
        <button onClick={() => dispatch(removeProduct(product.id))}>
          <FaRegTrashAlt className="size-8" />
        </button>
      </div>
    </li>
  );
}
