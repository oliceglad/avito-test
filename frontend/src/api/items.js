import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:80/items",
  }),
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => ``,
    }),

    getItemById: builder.query({
      query: (id) => `/${id}`,
    }),

    addItem: builder.mutation({
      query: (newItem) => ({
        url: "",
        method: "POST",
        body: newItem,
      }),
    }),

    updateItem: builder.mutation({
      query: ({ id, updatedItem }) => ({
        url: `/${id}`,
        method: "PUT",
        body: updatedItem,
      }),
    }),
  }),
});

export const {
  useGetAllItemsQuery,
  useGetItemByIdQuery,
  useAddItemMutation,
  useUpdateItemMutation,
} = itemsApi;
