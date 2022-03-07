import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const categoryService = createApi({
    reducerPath: 'category',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        prepareHeaders: (headers, {getState}) => {
            const reducers = getState();
            const token = reducers?.authReducer?.adminToken;
            headers.set('authorization', token ? `Bearer ${token}` : '');
            return headers;
        }
    }),
    endpoints: (builder) => {
       return {
           create: builder.mutation({
               query: (name) => {
                   return {
                       url: 'create-category',
                       method: 'POST',
                       body: name
                   }
               }
           }),
           get: builder.query({
               query: (page) => {
                   return {
                     url: `categories/${page}`,
                     method: 'GET'
                   }
               }
           })
       }
    }
});
export const {useCreateMutation, useGetQuery} = categoryService
export default categoryService