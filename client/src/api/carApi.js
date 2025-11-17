import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";


const baseUrl = 'http://localhost:3030/data/cars';

export const useCreateCar = () => {
    const { request } = useAuth();

    const create = async (carData) => {
        await request.post(baseUrl, carData);
    }

    return {
        create,
    };
}

export const useGetCars = () => {
    const { request } = useAuth();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then((data) => {
                setCars(data);
            })
    }, []);

    return {cars};
}