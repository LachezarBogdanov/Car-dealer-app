import { useState } from "react";
import { CreateContext } from "../contexts/CreateContext";


export default function CreateProvider({
    children,
}) {
    const [data, setData] = useState({
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
    });

    return (
        <CreateContext.Provider value={{
            setData,
            condition: data.condition,
            model: data.model,
            modifications: data.modifications,
            compartment: data.compartment,
            price: data.price,
            gears: data.gears,
            fuelType: data.fuelType,
            power: data.power,
            cubature: data.cubature,
            year: data.year,
            mileage: data.mileage,
            doorCount: data.doorCount,
            color: data.color,
            city: data.city,
            description: data.description,
            }}>
            {children}
        </CreateContext.Provider>
    );
}