import { createContext } from "react";

export const CreateContext = createContext({
    condition: '',
    model: '',
    modifications: '',
    compartment: '',
    price: '',
    gears: '',
    fuelType: '',
    power: '',
    cubature: '',
    year: '',
    mileage: '',
    doorCount: '',
    color: '',
    city: '',
    description: '',
    images: [],
    setImages() {},
    setData() {},
    resetData() {},
})