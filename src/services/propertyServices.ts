import api from "../api/api";
import { Property } from "../types/propertyTypes";


export const createPropertyService = async (property: Property) => {
    try {
        const response = await api.post("properties/create", property);
        console.log("createPropertyService response", response);
        return response.data;
    } catch (error) {
        return error;
    }
};