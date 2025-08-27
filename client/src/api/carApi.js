import useAuth from "../hooks/useAuth";


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