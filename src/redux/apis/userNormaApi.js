const { baseApi } = require('./baseApi');

export const userNormaApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getPrivateDailyNorma: build.mutation({
      query: body => ({
        url: `/users/daily-norma/private`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['PrivatDailyNorma'],
    }),
    //getBannedProducts
  }),
});
