import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ClientsState, IClient } from "../api/_interfaces.ts";

/**
 * clientsApi()
 *
 * Clients uses RTK Query to "query" for data in our database.
 * @link https://redux-toolkit.js.org/rtk-query/usage/mutations
 * @link https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#editing-posts
 */
export const clientsApi = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "clientsApi",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  // TypeScript
  // Solves: TS2322: Type 'string' is not assignable to type 'FullTagDescription' when using "providesTags".
  // @link: https://stackoverflow.com/questions/71124073/type-error-when-adding-providestags-in-rtk-query
  tagTypes: ["Clients"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getClientsList` endpoint is a "query" operation that returns data.
    getClientsList: builder.query<ClientsState, void>({
      // The URL for the request is 'http://localhost:3001/clients'
      query: () => "/clients",
      // Provides a list of `Clients` by `id`.
      // If any mutation is executed that `invalidates any of these tags, this query will re-run to be always up-to-date.
      // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
      providesTags: [{ type: "Clients", id: "LIST" }]
    }),

    // Query for a single client.
    // @link https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#displaying-individual-posts
    getClient: builder.query({
      query: (clientId) => ({
        url: `/clients/${clientId}`,
        credentials: "include"
      }),
      providesTags: [{ type: "Clients", id: "LIST" }]
    }),

    // POST request with mutation.  Create and add a Client.
    // @link: https://redux-toolkit.js.org/rtk-query/usage/mutations
    addClient: builder.mutation({
      query: (body) => ({
        url: `/clients`,
        method: "POST",
        credentials: "include",
        body
      }),
      invalidatesTags: [{ type: "Clients", id: "LIST" }],
      transformResponse: (result: { client: IClient }) => result.client
    }),

    // Query for editing a single client.
    // @link https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics#adding-the-single-post-query-endpoint
    updateClient: builder.mutation({
      query: (client) => {
        const { id, ...body } = client;
        return {
          url: `/clients/${id}`,
          method: "PATCH",
          body
        };
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: "Clients", id }]
    }),

    // DELETE request with mutation.  Delete a Client.
    deleteClient: builder.mutation({
      query: (clientId) => ({
        url: `/clients/${clientId}`,
        method: "DELETE",
        credentials: "include"
      }),
      invalidatesTags: [{ type: "Clients", id: "LIST" }]
    })
  })
});

// Export hooks for usage in function components, which are
// auto-generated based on defined endpoints.
export const {
  useGetClientsListQuery,
  useGetClientQuery,
  useUpdateClientMutation,
  useAddClientMutation,
  useDeleteClientMutation
} = clientsApi;
