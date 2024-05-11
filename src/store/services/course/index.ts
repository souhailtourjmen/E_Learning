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
<<<<<<< HEAD
            providesTags: (result: any) => {
              return [{type: 'course'}];
            },
          }),
        fetchCourseByNiveau: builder.query({
            query: (niveau:string) => `getCourByNiveau/${decodeURI(niveau)}/`,
            providesTags: (result: any) => {
                return [{type: 'coursesFiltre'}];
              },
=======
           
>>>>>>> 97ed279c (- add dynamic screen details)
          }),
        
    }),
    overrideExisting: true
  });
  
  export const {
    useFetchAllCourseQuery,
<<<<<<< HEAD
    useFetchCourseIdQuery,
    useFetchCourseByNiveauQuery
=======
    useFetchCourseIdQuery
>>>>>>> 97ed279c (- add dynamic screen details)
  } = courseApiSlice;
  