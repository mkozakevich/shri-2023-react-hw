import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query({ query: () => "movies" }),
    getMovie: builder.query({ query: (id) => `movie?movieId=${id}` }),
    getReviews: builder.query({ query: (id) => `reviews?movieId=${id}` }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetReviewsQuery } =
  movieApi;
