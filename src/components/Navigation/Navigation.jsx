import { useEffect, useState } from 'react';
import styles from './Navigation.module.css'

export default function Navigation({
    showMenu,
}) {
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setSlideIn(true), 10);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className={`${styles["wrapper"]} ${slideIn ? styles['slide-in'] : ''}`}>
        <div className={styles["close"]} onClick={() => showMenu(false)}><i className="fa-solid fa-xmark"></i></div>
        <section className={styles["menu-heading"]}>
            <h1>Меню</h1>
            <p>Здравейте, ИМЕ</p>
        </section>
        <section className={styles["start"]}>
            <a href="#" className={styles["heading-start"]}>
            Начало
            </a>
            <a href="#">+ Публикувай обява</a>
        </section>
        <section className={styles["menu-options"]}>
            <a href="#">Моите обяви</a>
            <a href="#">Изход</a>
        </section>
        </div>
    );
}
