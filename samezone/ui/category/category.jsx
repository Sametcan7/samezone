"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Filter from "./filter";
import Card from "./card";
import Loading from "./loading";
import { useGetCategoryQuery } from "@/samezone/lib/redux/api/apiSlice";

export default function Category() {
  // const [data, setData] = useState(null);
  // const [maxPrice, setMaxPrice] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const { products } = useParams();

  const { data, isFetching } = useGetCategoryQuery(products);

  // useEffect(() => {
  //   async function getData(query) {
  //     try {
  //       const response = await fetch(
  //         `https://fakestoreapi.com/products/category/${query}`,
  //       );

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const productJson = await response.json();
  //       setData(productJson);

  //       const price = productJson.reduce((acc, curr) =>
  //         acc.price > curr.price ? acc : curr,
  //       );

  //       setMaxPrice(price.price);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getData(products);
  // }, [products]);

  return (
    <div>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <div>
            <h1 className="py-8 text-3xl font-bold text-primary-color">
              {data[0].category.toUpperCase()}
            </h1>
          </div>

          <div className="my-8 flex h-auto gap-4">
            <Filter

              setFilteredData={setFilteredData}
              filteredData={filteredData}
              data={data}
            />
            <Card data={data} filteredData={filteredData} />
          </div>
        </>
      )}
    </div>
  );
}
