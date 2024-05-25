/* eslint-disable prettier/prettier */
import { DefaultValues } from "../../../types";
import { apiSlice } from "../../api/";
  
export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
      getInfoProfile: builder.query({
          query: () => `/api/profile/getInfoProfile/`,
          keepUnusedDataFor: Infinity,
          providesTags: (result: any) => {
            return [{type: 'profile'}];
          },
        }),
    updateProfile: builder.mutation({
            query: (postUpdate: DefaultValues) => ({
              url: `/api/profile/updateProfileController/`,
              method: "PUT",
              body: postUpdate,
            }),
            invalidatesTags: ['profile',],
          }),
  }),
  overrideExisting: true
});

export const {
  useGetInfoProfileQuery,
  useUpdateProfileMutation,
} = profileApiSlice;
