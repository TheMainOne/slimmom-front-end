const { baseApi } = require('./baseApi');

export const productsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query({
      query: ({ title, limit }) => ({
        url: `/products/`,
        method: 'GET',
        params: { title, limit },
      }),

      providesTags: ['Products'],
    }),

    addProduct: build.mutation({
      query: body => ({
        url: `/products`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productsApi;
