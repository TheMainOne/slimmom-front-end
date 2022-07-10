import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// example:  https://slimmom-teamcats.herokuapp.com/api/
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  prepareHeaders: (headers, { getState }) => {
    const token = ''; // getState().auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
  tagTypes: ['Products', 'Users', 'Diaries'],
  endpoints: () => ({}),
});
