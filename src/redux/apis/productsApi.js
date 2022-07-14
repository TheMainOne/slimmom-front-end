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

    addProduct: build.mutation({
      query: ({ date, id, weight }) => ({
        url: '/diary/',
        method: 'POST',
        body: { id, weight },
        params: { date },
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsMutation, useAddProductMutation } = productsApi;
