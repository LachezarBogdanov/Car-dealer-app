import { createContext } from "react";

export const SearchContext = createContext({
    compartment: '',
    model: '',
    fuelType: '',
    gears: '',
    priceMin: null,
    priceMax: null,
    yearMin: null,
    yearMax: null,
    city: '',
    color: '',
    doorCount: '',
    powerMin: null,
    powerMax: null,
    setData() {},
    resetData() {},
});