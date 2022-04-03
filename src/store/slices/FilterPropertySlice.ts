import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchLocationState {
    lat: number;
    lng: number;
    address: string;
    minPrice: number;
    maxPrice: number;
    minBedrooms: number;
    maxBedrooms: number;
    propertyType: string[];
}

const initialState: SearchLocationState = {
    lat: 40,
    lng: 20,
    address: '',
    minPrice: 0,
    maxPrice: 0,
    minBedrooms: 0,
    maxBedrooms: 0,
    propertyType: [],
};

export const filterPropertySlice = createSlice({
    name: 'searchLocation',
    initialState,
    reducers: {
        setLocation: (state:SearchLocationState, action: PayloadAction<{ lat: number, lng: number, address: string }>) => {
            state.lat = action.payload.lat;
            state.lng = action.payload.lng;
            state.address = action.payload.address;
        },
        setPrice: (state: SearchLocationState, action: PayloadAction<{ minPrice: number, maxPrice: number }>) => {
            state.minPrice = action.payload.minPrice;
            state.maxPrice = action.payload.maxPrice;
            if (state.minPrice > state.maxPrice && state.maxPrice > 0) {
                var tmp = state.minPrice;
                state.minPrice = state.maxPrice;
                state.maxPrice = tmp;
            }
        },
        setBedrooms: (state: SearchLocationState, action: PayloadAction<{ minBedrooms: number, maxBedrooms: number }>) => {
            state.minBedrooms = action.payload.minBedrooms;
            state.maxBedrooms = action.payload.maxBedrooms;
            if (state.minBedrooms > state.maxBedrooms && state.maxBedrooms > 0) {
                var tmp = state.minBedrooms;
                state.minBedrooms = state.maxBedrooms;
                state.maxBedrooms = tmp;
            }
        },
        addPropertyType: (state: SearchLocationState, action: PayloadAction<string>) => {
            if (state.propertyType.indexOf(action.payload) === -1) {
                state.propertyType.push(action.payload);
            }
        },
        removePropertyType: (state: SearchLocationState, action: PayloadAction<string>) => {
            state.propertyType = state.propertyType.filter(type => type !== action.payload);
        },
    }
});

export const { setLocation,setBedrooms,setPrice,addPropertyType,removePropertyType } = filterPropertySlice.actions;

export default filterPropertySlice.reducer;