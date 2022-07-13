const { baseApi } = require('./baseApi');

export const privatDailyNorma = baseApi.injectEndpoints({
  endpoints: build => ({
    privatDailyNorma: build.query({
      query: () => 'api/users/daily-norma',
      invalidatesTags: ['PrivatDailyNorma'],
    }),
  }),
});

export const { usePrivatDailyNormaQuery } = privatDailyNorma;
