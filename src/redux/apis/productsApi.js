const { baseApi } = require('./baseApi');

export const productsApi = baseApi.injectEndpoints({
  endpoints: build => ({
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

export const { useAddProductMutation } = productsApi;
