import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface SearchLocationState {
    lat: number;
    lng: number;
    address: string;
}

const initialState: SearchLocationState = {
    lat: 40,
    lng: 20,
    address: ''
};

export const searchLocationSlice = createSlice({
    name: 'searchLocation',
    initialState,
    reducers: {
        setLocation: (state:SearchLocationState, action: PayloadAction<{ lat: number, lng: number, address: string }>) => {
            state.lat = action.payload.lat;
            state.lng = action.payload.lng;
            state.address = action.payload.address;
        }
    }
});

export const { setLocation } = searchLocationSlice.actions;

export default searchLocationSlice.reducer;