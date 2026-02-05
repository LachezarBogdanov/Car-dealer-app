import { useState } from "react";
import { SearchContext } from "../contexts/SearchContext";

export default function SearchProvider({
    children,
}) {

    const defaultValues = {
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
    };

    const [data, setData] = useState(defaultValues);

    const resetData = () => {
        setData(defaultValues);
    }

  return (
    <SearchContext.Provider value={{
        setData,
        resetData,
        compartment: data.compartment,
        model: data.model,
        fuelType: data.fuelType,
        gears: data.gears,
        priceMin: data.priceMin,
        priceMax: data.priceMax,
        yearMin: data.yearMin,
        yearMax: data.yearMax,
        city: data.city,
        color: data.color,
        doorCount: data.doorCount,
        powerMin: data.powerMin,
        powerMax: data.powerMax,
    }}>
        {children}
    </SearchContext.Provider>
  );
};
