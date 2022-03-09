import api from "../api/api";
import { PropertyFormData } from "../types/propertyTypes";


const createPropertyService = async (property: PropertyFormData) => {
    try {
        const response = await api.post("properties/create", property);
        return response.data;
    } catch (error) {
        return error;
    }
};

const getPropertiesService = async () => { 
    try {
        const response = await api.get("properties");
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


const propertyServices = {
    createPropertyService,
    getPropertiesService,
    getPropertyService
};

export default propertyServices;