import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Property, PropertyFormData, PropertyState, UpdatePropertyFormData } from "../../types/propertyTypes";
import propertyServices from "../../services/propertyServices";

const initialState: PropertyState = {
    properties: [],
    propertiesList: [],
    lastProperties:[],
    property: {} as Property,
    numberofpages: 1,
    currentPage: 1,
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
    "property/getProperties",
    async (params: { minPrice: number; maxPrice: number; minBedrooms: number; maxBedrooms: number;propertyType:string[]}, thunkAPI) => {
        try {
            const response = await propertyServices.getPropertiesService(params);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);
export const getPropertiesToList = createAsyncThunk(
    "property/getPropertiesToList",
    async (params: { minPrice: number; maxPrice: number; minBedrooms: number; maxBedrooms: number; propertyType: string[], page: number }, thunkAPI) => {
        try {
            const response = await propertyServices.getPropertiesToListService(params);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
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

export const deleteProperty = createAsyncThunk(
    "property/delete",
    async (id: number, thunkAPI) => {
        try {
            const response = await propertyServices.deletePropertyService(id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getLastProperties = createAsyncThunk(
    "property/getLast",
    async () => {
        try {
            const response = await propertyServices.getLastPropertiesService();
            return response.data;
        } catch (error) {
            return error;
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
            state.error = null;
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
            state.error = null;
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
            state.error = null;
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
            state.error = null;
        });
        builder.addCase(updateProperty.fulfilled, (state, action) => {
            state.loading = false;
            state.property = action.payload.property;
        });
        builder.addCase(updateProperty.rejected, (state, action) => {
            state.error = action.error.message||"Something went wrong";
            state.loading = false;
        });
        builder.addCase(deleteProperty.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteProperty.fulfilled, (state, action) => {
            state.loading = false;
            state.property = action.payload.property;
        });
        builder.addCase(deleteProperty.rejected, (state, action) => {
            state.error = action.error.message||"Something went wrong";
            state.loading = false;
        });
        builder.addCase(getPropertiesToList.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getPropertiesToList.fulfilled, (state, action) => {
            state.loading = false;
            state.propertiesList = action.payload.properties;
            state.numberofpages = action.payload.numberofpages;
            state.currentPage = action.payload.currentPage;
        });
        builder.addCase(getPropertiesToList.rejected, (state, action) => {
            state.error = action.error.message||"Something went wrong";
            state.loading = false;
        });
        builder.addCase(getLastProperties.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getLastProperties.fulfilled, (state, action) => {
            state.loading = false;
            state.lastProperties = action.payload.properties;
        });
        builder.addCase(getLastProperties.rejected, (state, action) => {
            state.error = action.error.message||"Something went wrong";
            state.loading = false;
        });
    },
});

export default propertySlice.reducer;