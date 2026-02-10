import { useNavigate } from 'react-router';
import styles from './Car.module.css'
import { useContext } from 'react';
import { FavouriteContext } from '../../contexts/FavouriteContext';

export default function Car({
    car,
}) {
    const navigate = useNavigate();
    const { addToFavourite } = useContext(FavouriteContext);

    const date = new Date(car._createdOn);

    const formatedDate = 
        date.getDate()
        + "/"
        + (date.getMonth() + 1)
        + "/"
        + date.getFullYear();

    const addToFavourites = () => {
        addToFavourite(car);

        navigate('/myCars');
    }

    return (
        <>
    <div className={styles["car-card"]}>
        <div className={styles["car-top"]}>
        <span className={styles["timestamp"]}>{formatedDate}</span>
        <i className={`fa-regular fa-heart favourite ${styles.heart}`} onClick={() => addToFavourites()}></i>
        </div>
        <div onClick={() => navigate(`/details/${car._id}`)}>
        <div className={styles["img-price"]}>
            <img src={car?.images?.[0]} alt="Honda CR-V" />
            <div className={styles["car-price"]}>
            <span className={styles["price-bgn"]}>{car.price} EUR</span>
            </div>
        </div>
        <h3>{car.model} {car.modifications} {car.power}</h3>
        <p className={styles["details"]}>{car.year}, {car.fuelType}, {car.mileage} км.</p>
        <p className={styles["description"]}>
            {car.description}
        </p>
        <p className={styles["location"]}>IVO AUTO, {car.city}</p>
        </div>
    </div>
</>

    );
}
