import { baseApi } from './baseApi';

export const diaryApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProductsByDate: build.query({
      query: date => ({
        url: `/diary?date=${date}`,
        method: 'GET',
      }),
      providesTags: result => {
        const consumedProducts = result?.data?.consumedProducts;
        const isConsumedProducts =
          Array.isArray(consumedProducts) && Boolean(consumedProducts.length);

        return isConsumedProducts
          ? [
              ...consumedProducts.map(({ _id }) => ({
                type: 'Diaries',
                id: _id,
              })),
              { type: 'Diaries', id: 'LIST' },
            ]
          : [{ type: 'Diaries', id: 'LIST' }];
      },
    }),
    addProduct: build.mutation({
      query: ({ date, id, weight }) => ({
        url: '/diary/',
        method: 'POST',
        body: { id, weight: Number(weight) },
        params: { date },
      }),
      invalidatesTags: [{ type: 'Diaries', id: 'LIST' }],
    }),
    deleteProductFromDate: build.mutation({
      query: ({ currentDate, productId }) => {
        console.log(currentDate, productId);
        return {
          url: `/diary?date=${currentDate}&productId=${productId}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: result => {
        const productId = result.data._id;
        return [{ type: 'Diaries', id: productId }];
      },
    }),
  }),
});
