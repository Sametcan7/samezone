"use client";

import EvaluationScoreStar from "@/samezone/ui/evaluationScoreStar";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
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
          ELECTRONICS
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
  const [priceRange, setPriceRange] = useState(null);
  const [evaluationScore, setEvaluationScore] = useState(null);

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
  console.log(priceRange);
  return (
    <div className="sticky top-[20px]">
      <div className="w-[250px] rounded-lg border-2 border-black bg-secondary-color text-middle-color">
        <ElectronicsCategory />
        <div className="border-b-2 border-black py-3">
          <div className="flex">
            <p className="inline pb-1 pl-2 font-semibold text-text-color">
              Price Range
            </p>
            <button
              onClick={() => setPriceRange(null)}
              className="ml-auto mr-2 font-semibold text-red-600">
              Clear
            </button>
          </div>
          <label className="flex items-center gap-1 pl-4">
            <input
              onClick={(e) => setPriceRange(e.target.value.split("-"))}
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
              onClick={(e) => setPriceRange(e.target.value.split("-"))}
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
              onClick={(e) => setPriceRange(e.target.value.split("-"))}
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
              onClick={(e) => setPriceRange(e.target.value.split("-"))}
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
              onClick={(e) => setPriceRange(e.target.value.split("-"))}
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
              onClick={(e) => setPriceRange(e.target.value.split("-"))}
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
            <button
              onClick={() => setEvaluationScore(null)}
              className="ml-auto mr-2 font-semibold text-red-600">
              Clear
            </button>
          </div>

          <label>
            <div className="flex items-center gap-2 pl-4">
              <input
                type="radio"
                name="star"
                value="4"
                onClick={(e) => setEvaluationScore(e.target.value)}
              />
              <FaStar /> <span>4 Star And Above</span>
            </div>
          </label>
          <label>
            <div className="flex items-center gap-2 pl-4">
              <input
                type="radio"
                name="star"
                value="3"
                onClick={(e) => setEvaluationScore(e.target.value)}
              />
              <FaStar /> <span>3 Star And Above</span>
            </div>
          </label>
          <label>
            <div className="flex items-center gap-2 pl-4">
              <input
                type="radio"
                name="star"
                value="2"
                onClick={(e) => setEvaluationScore(e.target.value)}
              />
              <FaStar /> <span>2 Star And Above</span>
            </div>
          </label>
          <label>
            <div className="flex items-center gap-2 pl-4">
              <input
                checked={(!evaluationScore)}
                type="radio"
                name="star"
                value="1"
                onClick={(e) => setEvaluationScore(e.target.value)}
              />
              <FaStar /> <span>1 Star And Above</span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

function ElectronicsCategory() {
  const [computer, setComputer] = useState(false);
  const [printer, setPrinter] = useState(false);
  const [data, setData] = useState(false);
  const [component, setComponent] = useState(false);
  const [pripherals, setPripherals] = useState(false);

  return (
    <div className="border-b-2 border-black py-3">
      <div className="pb-1 pl-2 text-xl font-bold text-text-color">
        Electronics
      </div>
      <div
        className="pl-2 font-semibold"
        onClick={() => setComputer((state) => !state)}>
        Computers+-
      </div>
      <div className={`${computer ? "block" : "hidden"} pl-4`}>
        Desktop Computer
      </div>
      <div className={`${computer ? "block" : "hidden"} pl-4`}>
        Laptop Computer
      </div>
      <div className={`${computer ? "block" : "hidden"} pl-4`}>
        Monitor PC (All-in-One)
      </div>
      <div
        className={`${computer ? "block" : "hidden"} w-full overflow-clip break-words px-4 pl-4`}>
        Mini
        Deddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsdafssadsddsktop
      </div>
      <div className={`${computer ? "block" : "hidden"} pl-4`}>Servers</div>

      <div
        className="pl-2 font-semibold"
        onClick={() => setPrinter((state) => !state)}>
        Printer+-
      </div>

      <div className={`${printer ? "block" : "hidden"} pl-4`}>
        Laser Printers
      </div>
      <div className={`${printer ? "block" : "hidden"} pl-4`}>
        Inkjet Printers
      </div>
      <div className={`${printer ? "block" : "hidden"} pl-4`}>
        Tank Printers
      </div>
      <div className={`${printer ? "block" : "hidden"} pl-4`}>
        Dot Matrix Printers
      </div>
      <div className={`${printer ? "block" : "hidden"} pl-4`}>Scanners</div>

      <div
        className="pl-2 font-semibold"
        onClick={() => setData((state) => !state)}>
        Data Storage+-
      </div>

      <div className={`${data ? "block" : "hidden"} pl-4`}>USB Memory</div>
      <div className={`${data ? "block" : "hidden"} pl-4`}>Portable Disk</div>
      <div className={`${data ? "block" : "hidden"} pl-4`}>Portable SSD</div>
      <div className={`${data ? "block" : "hidden"} pl-4`}>MemoryCards</div>

      <div
        className="pl-2 font-semibold"
        onClick={() => setComponent((state) => !state)}>
        Computer Components+-
      </div>

      <div className={`${component ? "block" : "hidden"} pl-4`}>
        Motherboards
      </div>
      <div className={`${component ? "block" : "hidden"} pl-4`}>
        Graphics Cards
      </div>
      <div className={`${component ? "block" : "hidden"} pl-4`}>Memory</div>
      <div className={`${component ? "block" : "hidden"} pl-4`}>Processors</div>
      <div className={`${component ? "block" : "hidden"} pl-4`}>Hard Disks</div>

      <div
        className="pl-2 font-semibold"
        onClick={() => setPripherals((state) => !state)}>
        Pripherals+-
      </div>

      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>Monitors</div>
      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>Mouse</div>
      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>Keyboard</div>
      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>
        Power Supplies
      </div>
      <div className={`${pripherals ? "block" : "hidden"} pl-4`}>
        Electronic Dictionaries
      </div>
    </div>
  );
}

// function handlePriceRange(e) {
//   let price = e.split("-");
//   console.log(price[1]);

//   let filteredDataler = data.filter((filteredData) => {
//     if (price[1] === undefined) {
//       return filteredData.price >= price[0];
//     }
//     return filteredData.price >= price[0] && filteredData.price <= price[1];
//   });
//   setFilteredData(filteredDataler);
// }

// function handleRating(e) {
//   let filteredDataler = data.filter(
//     (filteredData) => filteredData.rating.rate >= e,
//   );
//   setFilteredData(filteredDataler);
// }
