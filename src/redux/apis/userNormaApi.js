const { baseApi } = require('./baseApi');

export const userNormaApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getPrivatDailyNorma: build.query({
      query: () => '/users/daily-norma',
      invalidatesTags: ['PrivatDailyNorma'],
    }),
    //getBannedProducts
  }),
});
