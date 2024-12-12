import Image from "next/image";
import Link from "next/link";
import EvaluationScoreStar from "../evaluationScoreStar";
import AddToCartButton from "./addToCartButton";

export default function Card({ data, filteredData }) {
  const lineClampStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
  };

  const products = filteredData ? filteredData : data;

  return (
    <div className="mx-4 grid w-full auto-rows-max grid-cols-[repeat(2,_minmax(0,_320px))] gap-2 lg:grid-cols-[repeat(3,_minmax(0,_320px))] xl:grid-cols-[repeat(4,_minmax(0,_320px))]">
      {products.map((product) => (
        <div
          key={product.id}
          className="group rounded-lg bg-secondary-color p-2 text-text-color transition-all duration-300 ease-in hover:m-[-2px] hover:border-2 hover:border-white hover:shadow-xl">
          <div className="relative mb-2">
            <Link href={`/product/${product.id}`}>
              <Image
                className="aspect-square w-full"
                src={product.image}
                width={0}
                height={0}
                sizes="100vw"
                alt=""
              />
            </Link>
            <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100">
              <AddToCartButton product={product} />
            </div>
          </div>
          <div>
            <p style={lineClampStyle}>{product.title}</p>
          </div>
          <div className="my-2">
            <div>
              <EvaluationScoreStar
                rating={product.rating.rate}
                count={product.rating.count}
              />
            </div>
          </div>
          <div className="font-bold">{product.price} $</div>
        </div>
      ))}
    </div>
  );
}
