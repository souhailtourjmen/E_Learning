/* eslint-disable prettier/prettier */

import {
  Credentials,
  SignUpBody,
  UpdatePasswordCredentials,
  UpdateProfileCredentials,
  ForgetPasswordCredentials,
} from "../../../types";
import { apiSlice } from "../../api/";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (credentials: Credentials, path: string = "eleve") => ({
        url: `/Login/${path}`,
        method: "POST",
        body: credentials,
      }),
    }),
    SignUp: builder.mutation({
      query: (credentials: SignUpBody, path: string = "eleve") => ({
        url: `/register/${path}`,
        method: "POST",
        body: credentials,
      }),
    }),
    UpdatePassword: builder.mutation({
      query: (credentials: UpdatePasswordCredentials) => ({
        url: "/updatePasswordByEmail/:email",
        method: "PUT",
        body: credentials,
      }),
    }),
    UpdateProfile: builder.mutation({
      query: (credentials: UpdateProfileCredentials) => ({
        url: "/updateProfileById/",
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["customer"],
    }),
    ForgetPassword: builder.mutation({
      query: (credentials: ForgetPasswordCredentials) => ({
        url: `/sendPasswordByEmail/:email`,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useForgetPasswordMutation,
} = authApiSlice;