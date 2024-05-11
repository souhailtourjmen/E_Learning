import {
  useForgetPasswordMutation,
  useLoginMutation,
  useSignUpMutation,
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
} from "./auth";
import { useFetchAllCourseQuery } from "./course";

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
};
