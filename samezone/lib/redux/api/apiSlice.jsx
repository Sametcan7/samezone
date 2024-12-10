import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/products",
    }),
    getProduct: build.query({
      query: (product_id) => `/products/${product_id}`,
    }),
    getCategory: build.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoryQuery, useGetProductQuery } =
  apiSlice;
