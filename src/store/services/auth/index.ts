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
<<<<<<< HEAD
      query: (credentials: Credentials) => ({
        url: `/Login/${credentials?.path}`,
=======
      query: (credentials: Credentials, path: string = "eleve") => ({
        url: `/Login/${path}`,
>>>>>>> 50fe44b2 (- add WS login implementation)
        method: "POST",
        body: credentials,
      }),
    }),
    SignUp: builder.mutation({
<<<<<<< HEAD
      query: (credentials: SignUpBody) => ({
        url: `/register/${credentials?.path}`,
=======
      query: (credentials: SignUpBody, path: string = "eleve") => ({
        url: `/register/${path}`,
>>>>>>> 50fe44b2 (- add WS login implementation)
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
<<<<<<< HEAD

  }),
  overrideExisting: true
=======
  }),
>>>>>>> 50fe44b2 (- add WS login implementation)
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useForgetPasswordMutation,
} = authApiSlice;
