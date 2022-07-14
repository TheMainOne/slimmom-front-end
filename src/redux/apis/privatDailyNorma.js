const { baseApi } = require('./baseApi');

export const privatDailyNorma = baseApi.injectEndpoints({
  endpoints: build => ({
    privatDailyNorma: build.query({
      query: () => '/users/daily-norma',
      invalidatesTags: ['PrivatDailyNorma'],
    }),
  }),
});

export const { usePrivatDailyNormaQuery } = privatDailyNorma;
