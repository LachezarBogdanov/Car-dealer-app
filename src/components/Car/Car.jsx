import { useNavigate } from 'react-router';
import styles from './Car.module.css'

export default function Car() {
    const navigate = useNavigate();

    return (
        <>
    <div className={styles["car-card"]} onClick={() => navigate('/details')}>
        <div className={styles["car-top"]}>
        <span className={styles["timestamp"]}>Dnes 18:00</span>
        <i className="fa-regular fa-heart favourite"></i>
        </div>
        <div className={styles["img-price"]}>
            <img src="mercedes.jpg" alt="Honda CR-V" />
            <div className={styles["car-price"]}>
            <span className={styles["price-bgn"]}>13,990 BGN</span>
            <span className={styles["price-eur"]}>7,152.97 EUR</span>
            </div>
        </div>
        <h3>Honda CR-V 2.0</h3>
        <p className={styles["details"]}>2007, Бензин, 204000 км.</p>
        <p className={styles["description"]}>
            Нов внос от Швейцария… Един предишен собственик…
        </p>
        <p className={styles["location"]}>IVO AUTO, Бургас</p>
    </div>
</>

    );
}
