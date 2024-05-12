
import { useLoginMutation, useSignUpMutation, useUpdatePasswordMutation, useUpdateProfileMutation, useForgetPasswordMutation } from "./auth";
import { useFetchAllCourseQuery, useFetchCourseIdQuery } from "./course";

export {
  // auth
  useLoginMutation,
  useSignUpMutation,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useForgetPasswordMutation,
  // end auth service
  // course service
  useFetchAllCourseQuery,
  useFetchCourseIdQuery,
};
