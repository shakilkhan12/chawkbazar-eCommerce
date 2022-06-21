import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const productService = createApi({
    reducerPath: 'products',
    tagTypes: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        prepareHeaders: (headers, {getState}) => {
            const reducers = getState();
            const token = reducers?.authReducer?.adminToken;
            console.log(token)
            headers.set('authorization', token ? `Bearer ${token}` : '');
            return headers;
        }
    }),
    endpoints: (builder) => {
        return {
            cProduct: builder.mutation({
                query: (data) => {
                   return {
                       url: '/create-product',
                       method: 'POST',
                       body: data
                   }
                },
                invalidatesTags: ['products']
            }),
            updateProduct: builder.mutation({
                query: data => {
                    return {
                       url: '/product',
                       method: 'PUT',
                       body: data
                    }
                },
                invalidatesTags: ['products']
            }),
            deleteProduct: builder.mutation({
                query: id => {
                    return {
                        url: `/delete/${id}`,
                        method: 'DELETE'
                    }
                },
                invalidatesTags: ['products']
            }),
            getProducts: builder.query({
                query: (page) => {
                 return {
                     url: `/products/${page}`,
                     method: 'GET'
                 }
                },
                providesTags: ['products']
            }),
            getProduct: builder.query({
                query: id => {
                return {
                    url: `/product/${id}`,
                    method: 'GET'
                }
                },
                providesTags: ['products']
            })
        }
    }
})
export const {useCProductMutation, useDeleteProductMutation , useUpdateProductMutation, useGetProductsQuery, useGetProductQuery} = productService;
export default productService