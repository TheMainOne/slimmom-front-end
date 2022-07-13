import { baseApi } from './baseApi';

export const diaryApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProductsByDate: build.query({
      query: date => ({
        url: `/api/diary?date=${date}`,
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Diaries', id })),
              { type: 'Diaries', id: 'LIST' },
            ]
          : [{ type: 'Diaries', id: 'LIST' }],
    }),
    deleteProductFromDate: build.mutation({
      query: (date, productId) => ({
        url: `/api/diary?date=${date}&productId=${productId}`,
        method: 'DELETE',
      }),
    }),
    invalidatesTags: [{ type: 'Diaries', id: 'LIST' }],
  }),
});

const { useGetProductsByDateQuery, useDeleteProductFromDate } = diaryApi;
