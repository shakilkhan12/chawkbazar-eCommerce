import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const authService = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/'
    }),
    endpoints: (builder) => {
       return {
           authLogin: builder.mutation({
               query: (loginData) => {
                   return {
                       url: 'login',
                       method: 'POST',
                       body: loginData
                   }
               }
           }),
           userRegister: builder.mutation({
            query: data => {
                return {
                    url: '/register',
                    method: 'POST',
                    body: data
                }
            }
           }),
           userLogin: builder.mutation({
            query: loginData => {
                return {
                    url: '/login',
                    method: 'POST',
                    body: loginData
                }
            }
           })
       }
    }
});
export const {useAuthLoginMutation, useUserRegisterMutation, useUserLoginMutation} = authService
export default authService