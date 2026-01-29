import { createContext } from "react";


export const FavouriteContext = createContext({
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
    city: '',
    description: '',
    images: [],
    favouriteItems: {},
    addToFavourite() {},
    removeFavourite() {},
});