export interface PropertyState {
    properties: Property[];
    property: Property;
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
