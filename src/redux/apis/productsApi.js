const { baseApi } = require('./baseApi');

export const productsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.mutation({
      query: ({ title, limit }) => ({
        url: `/products/`,
        method: 'GET',
        params: { title, limit },
      }),

      providesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsMutation } = productsApi;
