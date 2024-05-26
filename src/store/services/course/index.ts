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
            providesTags: (result: any) => {
              return [{type: 'course'}];
            },
          }),
        fetchCourseByNiveau: builder.query({
            query: (niveau:string) => `getCourByNiveau/${decodeURI(niveau)}/`,
            providesTags: (result: any) => {
                return [{type: 'coursesFiltre'}];
              },
          }),
        
    }),
    overrideExisting: true
  });
  
  export const {
    useFetchAllCourseQuery,
    useFetchCourseIdQuery,
    useFetchCourseByNiveauQuery
  } = courseApiSlice;
  