import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "webshop/feature/counter/counter.slice";
import { usersApi } from "webshop/feature/users/users.query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
