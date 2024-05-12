
import { useLoginMutation, useSignUpMutation, useUpdatePasswordMutation, useUpdateProfileMutation, useForgetPasswordMutation } from "./auth";
import { useFetchAllChatsQuery, useSendMessageMutation } from "./chat";
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
  // end course service
  // chat service 
  useFetchAllChatsQuery,
  useSendMessageMutation
};
