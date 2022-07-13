const { baseApi } = require('./baseApi');

export const bannedProductsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getBannedProducts: build.mutation({
      query: body => ({
        url: `users/daily-norma`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['BannedProducts'],
    }),
  }),
});

export const { useGetBannedProductsMutation } = bannedProductsApi;
