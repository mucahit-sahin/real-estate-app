import { createSlice } from '@reduxjs/toolkit'

export enum AlertType {
    SUCCESS = 'Success',
    ERROR = 'Error',
    WARNING = 'Warning',
    INFO = 'Info',
}

interface AlertState {
    type: AlertType;
    message: string;
    show: boolean;
}

const initialState = {
    type: AlertType.SUCCESS,
    message: '',
    show: false,
} as AlertState

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, action) => {
            state.type = action.payload.type;
            state.message = action.payload.message;
            state.show = true;
        },
        hideAlert: (state) => {
            state.show = false;
            state.message = '';
        }
    }
})

export const { showAlert, hideAlert } = alertSlice.actions

export default alertSlice.reducer