import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Property, PropertyState } from "../../types/propertyTypes";
import { createPropertyService } from "../../services/propertyServices";

const initialState:PropertyState = {
    properties: [],
    property: {} as Property,
    loading: false,
    error: null,
} as PropertyState;



// create property
export const createProperty = createAsyncThunk(
    "property/create",
    async (property: Property, thunkAPI) => {
        try {
            const response = await createPropertyService(property);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const propertySlice = createSlice({
    name: "properties",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createProperty.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createProperty.fulfilled, (state, action) => {
            state.loading = false;
            state.property = action.payload.data.property;
        });
        builder.addCase(createProperty.rejected, (state, action) => {
            state.error = action.error.message||"Something went wrong";
            state.loading = false;
        });
    },
});

export default propertySlice.reducer;