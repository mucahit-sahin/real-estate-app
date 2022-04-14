import api from "../api/api";
import { PropertyFormData, UpdatePropertyFormData } from "../types/propertyTypes";


const createPropertyService = async (property: PropertyFormData) => {
    try {
        const response = await api.post("properties/create", property);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getPropertiesService = async ({ minPrice, maxPrice, minBedrooms, maxBedrooms,propertyType}: {
    minPrice: number;
    maxPrice: number;
    minBedrooms: number;
    maxBedrooms: number;
    propertyType: string[];
}) => { 
    try {
        const minPriceValue = minPrice !== 0 ? `&minPrice=${minPrice}` : "";
        const maxPriceValue = maxPrice !== 0 ? `&maxPrice=${maxPrice}` : "";
        const minBedroomsValue = minBedrooms !== 0 ? `&minBedrooms=${minBedrooms}` : "";
        const maxBedroomsValue = maxBedrooms !== 0 ? `&maxBedrooms=${maxBedrooms}` : "";
        const propertyTypeValue = propertyType.length !== 0 ? `&propertyType=${propertyType.toString()}` : "";

        const response = await api.get("properties?" + minPriceValue + maxPriceValue + minBedroomsValue + maxBedroomsValue + propertyTypeValue);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getPropertiesToListService = async({ minPrice, maxPrice, minBedrooms, maxBedrooms, propertyType, page }: {
    minPrice: number;
    maxPrice: number;
    minBedrooms: number;
    maxBedrooms: number;
    propertyType: string[];
    page: number;
}) => {
    try {
        const minPriceValue = minPrice !== 0 ? `&minPrice=${minPrice}` : "";
        const maxPriceValue = maxPrice !== 0 ? `&maxPrice=${maxPrice}` : "";
        const minBedroomsValue = minBedrooms !== 0 ? `&minBedrooms=${minBedrooms}` : "";
        const maxBedroomsValue = maxBedrooms !== 0 ? `&maxBedrooms=${maxBedrooms}` : "";
        const propertyTypeValue = propertyType.length !== 0 ? `&propertyType=${propertyType.toString()}` : "";
        const pageValue = page !== 0 ? `&page=${page}` : "";

        const response = await api.get("properties?" + minPriceValue + maxPriceValue + minBedroomsValue + maxBedroomsValue + propertyTypeValue + pageValue);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getPropertyService = async (id: string) => {
    try {
        const response = await api.get(`properties/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const updatePropertyService = async (property: UpdatePropertyFormData) => {
    try {
        const response = await api.put(`properties/${property._id}`, property);
        return response.data;
    } catch (error) {
        return error;
    }
};

const deletePropertyService = async (id: number) => {
    try {
        const response = await api.delete(`properties/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getLastPropertiesService = async () => { 
    try {
        const response = await api.get("properties/last");
        return response.data;
    } catch (error) {
        return error;
    }
};

const propertyServices = {
    createPropertyService,
    getPropertiesService,
    getPropertiesToListService,
    getPropertyService,
    updatePropertyService,
    deletePropertyService,
    getLastPropertiesService
};

export default propertyServices;