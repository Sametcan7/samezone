"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Filter from "./filter";
import Card from "./card";
import Loading from "./loading";
import { useGetCategoryQuery } from "@/samezone/lib/redux/api/apiSlice";

export default function Category() {
  const [filteredData, setFilteredData] = useState(null);
  const { products } = useParams();

  const { data, isFetching } = useGetCategoryQuery(products);

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

          <div className="my-8 flex h-auto gap-4 max-md:flex-col">
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
