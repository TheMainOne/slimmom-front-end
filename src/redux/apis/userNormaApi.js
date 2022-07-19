const { baseApi } = require('./baseApi');

const userNormaApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getPrivateDailyNorma: build.mutation({
      query: body => ({
        url: `/users/daily-norma/private`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['PrivatDailyNorma'],
    }),
    getBannedProducts: build.mutation({
      query: body => ({
        url: `/users/daily-norma/public`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['BannedProducts'],
    }),
  }),
});

export const { useGetPrivateDailyNormaMutation, useGetBannedProductsMutation } =
  userNormaApi;
