import { useGetCars } from "../../api/carApi";
import useAuth from "../../hooks/useAuth";
import Car from "../Car/Car";
import styles from "../MyCars/MyCars.module.css"

export default function MyCars() {
    const { cars } = useGetCars();
    const { _id } = useAuth();

    return (
        <>
        <div className={styles.wrapp}>
            {
                cars
                .filter(car => car._ownerId === _id)
                .map(car => (
                    <Car key={car._id} car={car}/>
                ))
            }       
            </div>
        </>
    );
}
