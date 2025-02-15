import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/items",
  }),
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => ``,
    }),

    getItemById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetAllItemsQuery, useGetItemByIdQuery } = itemsApi;
