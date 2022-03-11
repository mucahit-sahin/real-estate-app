import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface ModalState {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
  isRemoveModalOpen: boolean;
  removeModalId: number;
}

// Define the initial state using that type
const initialState: ModalState = {
  isLoginOpen: false,
  isSignupOpen: false,
  isRemoveModalOpen: false,
  removeModalId: 0
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
    openRemoveModal: (state, action) => {
      state.isRemoveModalOpen = true;
      state.removeModalId = action.payload;
    },
    closeRemoveModal: (state) => {
      state.isRemoveModalOpen = false;
      state.removeModalId = 0;
    },
  },
})

export const { openLoginModal,closeLoginModal,openSignupModal,closeSignupModal,openRemoveModal,closeRemoveModal } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectIsOpen = (state: RootState) => state.modals.isLoginOpen

export default modalSlice.reducer