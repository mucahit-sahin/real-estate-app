import { configureStore } from '@reduxjs/toolkit'
import { alertSlice } from './slices/AlertSlice'
import { modalSlice } from './slices/ModalSlice'
import { propertySlice } from './slices/PropertySlice'
import { searchLocationSlice } from './slices/SearchLocationSlice'
import { userSlice } from './slices/UserSlice'
// ...

export const store = configureStore({
  reducer: {
    modals: modalSlice.reducer,
    searchLocation: searchLocationSlice.reducer,
    user: userSlice.reducer,
    property: propertySlice.reducer,
    alert: alertSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch