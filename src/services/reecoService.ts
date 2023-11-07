import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reecoApi = createApi({
  reducerPath: 'reecoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://test/Url',
    prepareHeaders: (headers, { getState }) => {
      const token = ''
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: builder => ({
    getTwoFAQrCode: builder.mutation<any, any>({
      query: credentials => ({
        url: 'two-factor',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useGetTwoFAQrCodeMutation } = reecoApi
