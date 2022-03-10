import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Property, PropertyFormData, PropertyState, UpdatePropertyFormData } from "../../types/propertyTypes";
import propertyServices from "../../services/propertyServices";

const initialState:PropertyState = {
    properties: [],
    property: {} as Property,
    loading: false,
    error: null,
} as PropertyState;



// create property
export const createProperty = createAsyncThunk(
    "property/create",
    async (property: PropertyFormData, thunkAPI) => {
        try {
            const response = await propertyServices.createPropertyService(property);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getProperties = createAsyncThunk(
    "property/get",
    async () => {
        try {
            const response = await propertyServices.getPropertiesService();
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const getProperty = createAsyncThunk(
    "property/getOne",
    async (id: string) => {
        try {
            const response = await propertyServices.getPropertyService(id);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const updateProperty = createAsyncThunk(
    "property/update",
    async (property: UpdatePropertyFormData, thunkAPI) => {
        try {
            const response = await propertyServices.updatePropertyService(property);
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
            //state.property = action.payload.data.property;
        });
        builder.addCase(createProperty.rejected, (state, action) => {
            state.error = action.error.message||"Something went wrong";
            state.loading = false;
        });
        builder.addCase(getProperties.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProperties.fulfilled, (state, action) => {
            state.loading = false;
            state.properties = action.payload.properties;
        });
        builder.addCase(getProperties.rejected, (state, action) => {
            state.error = action.error.message||"Something went wrong";
            state.loading = false;
        });
        builder.addCase(getProperty.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getProperty.fulfilled, (state, action) => {
            state.loading = false;
            state.property = action.payload.property;
        });
        builder.addCase(getProperty.rejected, (state, action) => {
            state.error = action.error.message||"Something went wrong";
            state.loading = false;
        });
        builder.addCase(updateProperty.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(updateProperty.fulfilled, (state, action) => {
            state.loading = false;
            state.property = action.payload.property;
        });
        builder.addCase(updateProperty.rejected, (state, action) => {
            state.error = action.error.message||"Something went wrong";
            state.loading = false;
        });
    },
});

export default propertySlice.reducer;