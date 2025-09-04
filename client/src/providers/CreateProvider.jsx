import { useState } from "react";
import { CreateContext } from "../contexts/CreateContext";

export default function CreateProvider({
    children,
}) {

    const defaultValues = {
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
    }

    const [data, setData] = useState(defaultValues);
    const [images, setImages] = useState([null, null, null, null, null ]);


    const resetData = () => {
        setData(defaultValues);
    }

    return (
        <CreateContext.Provider value={{
            setData,
            resetData,
            setImages,
            images,
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