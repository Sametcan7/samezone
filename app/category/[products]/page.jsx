"use client";

import CategoryLists from "@/samezone/ui/categoryLists";
import EvaluationScoreStar from "@/samezone/ui/evaluationScoreStar";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Page() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [maxPrice, setMaxPrice] = useState(null);
  const [loading, setLoading] = useState(true);

  const { products } = useParams();
  useEffect(() => {
    async function getData(query) {
      try {
        const data = await fetch(
          `https://fakestoreapi.com/products/category/${query}`,
        );
        const products = await data.json();
        setData(products);

        const price = products.reduce((acc, curr) =>
          acc.price > curr.price ? acc : curr,
        );

        setMaxPrice(price.price);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getData(products);
  }, [products]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div>
        <h1 className="py-8 text-3xl font-bold text-primary-color">
          {data[0].category.toUpperCase()}
        </h1>
      </div>

      <div className="my-8 flex h-auto gap-4">
        <Filter
          maxPrice={maxPrice}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
          data={data}
        />
        <Card data={data} filteredData={filteredData} />
      </div>
    </div>
  );
}

function Card({ data, filteredData }) {
  const lineClampStyle = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
    overflow: "hidden",
  };

  const products = filteredData ? filteredData : data;

  return (
    <div className="mx-4 grid w-full auto-rows-max grid-cols-[repeat(4,_minmax(0,_320px))] gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-lg bg-secondary-color p-2 text-text-color">
          <div className="mb-2">
            <Image
              className="aspect-square w-full"
              src={product.image}
              width={0}
              height={0}
              sizes="100vw"
              alt=""
            />
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

function Filter({ maxPrice, setFilteredData, filteredData, data }) {
  const [priceRange, setPriceRange] = useState("");
  const [evaluationScore, setEvaluationScore] = useState("");

  useEffect(() => {
    if (priceRange || evaluationScore) {
      let res = data.filter((product) => {
        return (
          (!priceRange ||
            (priceRange[1] == "+" && product.price >= priceRange[0]) ||
            (product.price >= priceRange[0] &&
              product.price <= priceRange[1])) &&
          (!evaluationScore || product.rating.rate >= evaluationScore)
        );
      });
      setFilteredData(res);
    }
    if (!(priceRange || evaluationScore)) {
      setFilteredData(null);
    }
  }, [data, evaluationScore, priceRange, setFilteredData]);
  return (
    <div className="sticky top-[20px]">
      <div className="w-[250px] rounded-lg border-2 border-black bg-secondary-color text-middle-color">
        <CategoryLists category={data[0].category} />
        <div className="border-b-2 border-black py-3">
          <div className="flex">
            <p className="inline pb-1 pl-2 font-semibold text-text-color">
              Price Range
            </p>
            {priceRange && (
              <button
                onClick={() => setPriceRange("")}
                className="ml-auto mr-2 font-semibold text-red-600">
                Clear
              </button>
            )}
          </div>
          <label className="flex items-center gap-1 pl-4">
            <input
              checked={priceRange && priceRange[0] === "0"}
              onChange={(e) => setPriceRange(e.target.value.split("-"))}
              type="radio"
              name="price"
              value={`0-${Math.trunc(maxPrice / 5)}`}
            />
            <span>
              {0} - {Math.trunc(maxPrice / 5)}
            </span>
          </label>
          <label className="flex items-center gap-1 pl-4">
            <input
              checked={
                priceRange && priceRange[0] === `${Math.trunc(maxPrice / 5)}`
              }
              onChange={(e) => setPriceRange(e.target.value.split("-"))}
              type="radio"
              name="price"
              value={`${Math.trunc(maxPrice / 5)}-${Math.trunc(maxPrice / 4)}`}
            />
            <span>
              {Math.trunc(maxPrice / 5)} - {Math.trunc(maxPrice / 4)}
            </span>
          </label>
          <label className="flex items-center gap-1 pl-4">
            <input
              checked={
                priceRange && priceRange[0] === `${Math.trunc(maxPrice / 4)}`
              }
              onChange={(e) => setPriceRange(e.target.value.split("-"))}
              type="radio"
              name="price"
              value={`${Math.trunc(maxPrice / 4)}-${Math.trunc(maxPrice / 3)}`}
            />
            <span>
              {Math.trunc(maxPrice / 4)} - {Math.trunc(maxPrice / 3)}
            </span>
          </label>
          <label className="flex items-center gap-1 pl-4">
            <input
              checked={
                priceRange && priceRange[0] === `${Math.trunc(maxPrice / 3)}`
              }
              onChange={(e) => setPriceRange(e.target.value.split("-"))}
              type="radio"
              name="price"
              value={`${Math.trunc(maxPrice / 3)}-${Math.trunc(maxPrice / 2)}`}
            />
            <span>
              {Math.trunc(maxPrice / 3)} - {Math.trunc(maxPrice / 2)}
            </span>
          </label>
          <label className="flex items-center gap-1 pl-4">
            <input
              checked={
                priceRange && priceRange[0] === `${Math.trunc(maxPrice / 2)}`
              }
              onChange={(e) => setPriceRange(e.target.value.split("-"))}
              type="radio"
              name="price"
              value={`${Math.trunc(maxPrice / 2)}-${Math.trunc(maxPrice / 1)}`}
            />
            <span>
              {Math.trunc(maxPrice / 2)} - {Math.trunc(maxPrice / 1)}
            </span>
          </label>
          <label className="flex items-center gap-1 pl-4">
            <input
              checked={
                priceRange && priceRange[0] === `${Math.trunc(maxPrice / 1)}`
              }
              onChange={(e) => setPriceRange(e.target.value.split("-"))}
              type="radio"
              name="price"
              value={`${Math.trunc(maxPrice / 1)}-+`}
            />
            <span>{Math.trunc(maxPrice / 1)} and above</span>
          </label>
        </div>
        <div className="py-3">
          <div className="flex">
            <p className="inline pb-1 pl-2 font-semibold text-text-color">
              Evaluation Score
            </p>
            {evaluationScore && (
              <button
                onClick={() => setEvaluationScore("")}
                className="ml-auto mr-2 font-semibold text-red-600">
                Clear
              </button>
            )}
          </div>

          <label>
            <div className="flex items-center gap-2 pl-4">
              <input
                checked={evaluationScore == "4"}
                type="radio"
                name="star"
                value="4"
                onChange={(e) => setEvaluationScore(e.target.value)}
              />
              <FaStar /> <span>4 Star And Above</span>
            </div>
          </label>
          <label>
            <div className="flex items-center gap-2 pl-4">
              <input
                checked={evaluationScore == "3"}
                type="radio"
                name="star"
                value="3"
                onChange={(e) => setEvaluationScore(e.target.value)}
              />
              <FaStar /> <span>3 Star And Above</span>
            </div>
          </label>
          <label>
            <div className="flex items-center gap-2 pl-4">
              <input
                checked={evaluationScore == "2"}
                type="radio"
                name="star"
                value="2"
                onChange={(e) => setEvaluationScore(e.target.value)}
              />
              <FaStar /> <span>2 Star And Above</span>
            </div>
          </label>
          <label>
            <div className="flex items-center gap-2 pl-4">
              <input
                checked={evaluationScore == "1"}
                type="radio"
                name="star"
                value="1"
                onChange={(e) => setEvaluationScore(e.target.value)}
              />
              <FaStar /> <span>1 Star And Above</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
