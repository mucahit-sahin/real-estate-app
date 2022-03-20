export interface PropertyState {
    properties: Property[];
    propertiesList: Property[];
    property: Property;
    numberofpages: number;
    currentPage: number;
    loading: boolean;
    error: string | null;
}

export interface Property {
    _id: number;
    title: string;
    description: string;
    price: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    country: string;
    area: string;
    zipCode: string;
    propertyType: string;
    squareMeters: string;
    bedrooms: string;
    bathrooms: string;
    latitude: number;
    longitude: number;
    isDogfriendly: boolean;
    isCatfriendly: boolean;
    isSmokingfriendly: boolean;
    user: User;
}
export interface User {
    _id: number;
    email: string;
    fullname: string;
}
export interface PropertyFormData {
    title: string;
    description: string;
    price: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    area: string;
    country: string;
    zipCode: string;
    propertyType: string;
    squareMeters: string;
    bedrooms: string;
    bathrooms: string;
    latitude: number;
    longitude: number;
    isDogfriendly: boolean;
    isCatfriendly: boolean;
    isSmokingfriendly: boolean;
}

export interface UpdatePropertyFormData { 
    _id: number;
    title: string;
    description: string;
    price: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    area: string;
    country: string;
    zipCode: string;
    propertyType: string;
    squareMeters: string;
    bedrooms: string;
    bathrooms: string;
    latitude: number;
    longitude: number;
    isDogfriendly: boolean;
    isCatfriendly: boolean;
    isSmokingfriendly: boolean;
} 