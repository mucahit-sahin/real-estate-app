import api from "../api/api";
import { PropertyFormData } from "../types/propertyTypes";


const createPropertyService = async (property: PropertyFormData) => {
    try {
        const response = await api.post("properties/create", property);
        console.log("createPropertyService response", response);
        return response.data;
    } catch (error) {
        return error;
    }
};

const propertyServices = {
    createPropertyService,
};

export default propertyServices;