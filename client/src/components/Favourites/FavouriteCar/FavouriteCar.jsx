import { useNavigate } from 'react-router';
import styles from '../FavouriteCar/FavouriteCar.module.css';

export default function FavouriteCar({
    car,
}) {
     const navigate = useNavigate();

     const date = new Date(car._createdOn);

     const formatedDate = 
        date.getDate()
        + "/"
        + (date.getMonth() + 1)
        + "/"
        + date.getFullYear();

    return (
        <>
            <div className={styles["car-card"]} onClick={() => navigate(`/details/${car._id}`)}>
                    <div className={styles["car-top"]}>
                    <span className={styles["timestamp"]}>{formatedDate}</span>
                    </div>
                    <div className={styles["img-price"]}>
                        <img src={car?.images?.[0]} alt="Honda CR-V" />
                        <div className={styles["car-price"]}>
                        <span className={styles["price-bgn"]}>{car.price} BGN</span>
                        <span className={styles["price-eur"]}>{(car.price * 0.51).toFixed(0)} EUR</span>
                        </div>
                    </div>
                    <h3>{car.model} {car.modifications} {car.power}</h3>
                    <p className={styles["details"]}>{car.year}, {car.fuelType}, {car.mileage} км.</p>
                    <p className={styles["description"]}>
                        {car.description}
                    </p>
                    <p className={styles["location"]}>IVO AUTO, {car.city}</p>
                </div>
        </>
    );
}
