import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderService = createApi({
  reducerPath: "orders",
  tagTypes: "orders",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.adminToken;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getOrders: builder.query({
        query: (page) => {
          return {
            url: `/orders?page=${page}`,
            method: "GET",
          };
        },
        providesTags: ["orders"],
      }),
      details: builder.query({
        query: (id) => {
          return {
            url: `/order-details/${id}`,
            method: "GET",
          };
        },
        providesTags: ["orders"],
      }),
      deliverOrder: builder.mutation({
        query: (id) => {
          return {
            url: `/order-update?id=${id}&status=delivered`,
            method: "PUT",
          };
        },
        invalidatesTags: ["orders"],
      }),
    };
  },
});
export const { useGetOrdersQuery, useDetailsQuery, useDeliverOrderMutation } =
  orderService;
export default orderService;
