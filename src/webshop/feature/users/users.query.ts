import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { User } from "./users.type";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getUsers: builder.query<{ users: User[] }, void>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
