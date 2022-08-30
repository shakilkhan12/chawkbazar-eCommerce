import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const paymentService = createApi({
  reducerPath: "payment",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => {
    return {
      sendPayment: builder.mutation({
        query: (cart) => {
          return {
            url: "/create-checkout-session",
            method: "POST",
            body: cart,
          };
        },
      }),
    };
  },
});
export const { useSendPaymentMutation } = paymentService;
export default paymentService;
