import { useEffect, useState } from "react";
import CategoryLists from "./categoryLists";
import { FaStar } from "react-icons/fa";

export default function Filter({ setFilteredData, filteredData, data }) {
  const [priceRange, setPriceRange] = useState("");
  const [evaluationScore, setEvaluationScore] = useState("");
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      const maxPrice = data.reduce((acc, curr) =>
        acc.price > curr.price ? acc : curr,
      ).price;
      setMaxPrice(maxPrice);
    }
  }, [data]);

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
