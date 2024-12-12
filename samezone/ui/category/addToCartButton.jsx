import { addProduct } from "@/samezone/lib/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/samezone/lib/redux/hooks";

export default function AddToCartButton({ product }) {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(addProduct(product))}
      className="w-full border-2 border-black bg-middle-color text-xl font-bold transition-all duration-300 ease-in-out hover:bg-secondary-color active:text-middle-color">
      Add To Cart
    </button>
  );
}
