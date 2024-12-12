import { useParams } from "next/navigation";
import EvaluationScoreStar from "../ui/evaluationScoreStar";
import Image from "next/image";
import { useGetProductQuery } from "../lib/redux/api/apiSlice";
import { addProduct } from "../lib/redux/features/cart/cartSlice";
import { useAppDispatch } from "../lib/redux/hooks";

export default function Product() {
  const { id } = useParams();
  const { data: product, isFetching } = useGetProductQuery(id);
  const dispatch = useAppDispatch();

  return (
    <div>
      {isFetching ? (
        <Loading />
      ) : (
        <div>
          <h2 className="my-8 text-center text-2xl font-bold"></h2>
          <div className="my-8 flex justify-evenly gap-4 rounded-lg bg-secondary-color p-3 text-text-color">
            <div className="w-[40%] shrink-0">
              <Image
                className="mx-auto aspect-square rounded-lg"
                src={product.image}
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div>
              <div>
                <p className="mb-4 text-xl font-bold">{product.title}</p>
                <p className="text-lg font-semibold">{product.description}</p>
              </div>
              <div>
                <div className="mt-4 flex items-center gap-2">
                  <EvaluationScoreStar
                    rating={product.rating.rate}
                    count={product.rating.count}
                  />
                  <span className="font-semibold">Reviews</span>
                </div>
              </div>
              <p className="mt-4 text-3xl font-extrabold">{product.price} $</p>

              <button
                onClick={() => dispatch(addProduct(product))}
                className="mt-8 rounded-xl bg-middle-color px-4 py-3 text-3xl font-bold text-text-color">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Loading() {
  return (
    <div className="">
      <div className="my-12 text-center">
        <p className="mx-auto inline rounded-lg bg-slate-500 px-40 py-2"></p>
      </div>
      <div className="my-8 flex justify-evenly gap-4 rounded-lg bg-secondary-color p-3">
        <div className="w-[40%] shrink-0 animate-pulse">
          <div className="mx-auto aspect-square w-[80%] rounded-lg bg-slate-500 max-2xl:w-[100%]"></div>
        </div>
        <div className="w-[60%] animate-pulse">
          <div>
            <p className="my-4 rounded-xl bg-slate-500 py-3"></p>
            <p className="my-4 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="my-4 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="my-4 rounded-xl bg-slate-500 py-1.5"></p>
            <p className="my-4 rounded-xl bg-slate-500 py-1.5"></p>
          </div>
          <div className="mt-8">
            <p className="mb-4 mt-2 rounded-xl bg-slate-500 py-2"></p>
          </div>
          <div>
            <p className="mb-4 mt-2 rounded-xl bg-slate-500 py-4"></p>
          </div>
          <div className="mt-8">
            <p className="inline rounded-xl bg-middle-color bg-slate-500 px-24 py-3"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
