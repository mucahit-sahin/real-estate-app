import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface ModalState {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
}

// Define the initial state using that type
const initialState: ModalState = {
  isLoginOpen: false,
  isSignupOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openLoginModal: (state) => {
      state.isLoginOpen = true;
      state.isSignupOpen = false;
    },
    closeLoginModal: (state) => {
      state.isLoginOpen = false;
    },
    openSignupModal: (state) => {
      state.isSignupOpen = true;
      state.isLoginOpen = false;
    },
    closeSignupModal: (state) => {
      state.isSignupOpen = false;
    },

  },
})

export const { openLoginModal,closeLoginModal,openSignupModal,closeSignupModal } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIsOpen = (state: RootState) => state.modals.isLoginOpen

export default modalSlice.reducer