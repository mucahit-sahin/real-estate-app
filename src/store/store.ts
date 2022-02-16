import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './slices/ModalSlice'
import { searchLocationSlice } from './slices/SearchLocationSlice'
// ...

export const store = configureStore({
  reducer: {
    modals: modalSlice.reducer,
    searchLocation: searchLocationSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch