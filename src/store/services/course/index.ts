/* eslint-disable prettier/prettier */


  import { apiSlice } from "../../api/";
  
  export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        fetchAllCourse: builder.query({
            query: () => `getAllCours`,
            providesTags: (result: any) => {
              return [{type: 'courses'}];
            },
          }),
        fetchCourseId: builder.query({
            query: (id:string) => `/getCour/${id}`,
           
          }),
        
    }),
    overrideExisting: true
  });
  
  export const {
    useFetchAllCourseQuery,
    useFetchCourseIdQuery
  } = courseApiSlice;
  