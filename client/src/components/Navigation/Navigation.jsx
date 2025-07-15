import { useEffect, useState } from 'react';
import styles from './Navigation.module.css'
import { NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function Navigation({
    showMenu,
}) {
    const [slideIn, setSlideIn] = useState(false);
    const { email, isAuthenticated } = useAuth();

    useEffect(() => {
        const timeout = setTimeout(() => setSlideIn(true), 10);
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className={`${styles["wrapper"]} ${slideIn ? styles['slide-in'] : ''}`}>
        <div className={styles["close"]} onClick={() => showMenu(false)}><i className="fa-solid fa-xmark"></i></div>
        <section className={styles["menu-heading"]}>
            <h1>Меню</h1>
            {isAuthenticated && (
                <p>Здравейте, {email}</p>
            )}
        </section>
        <section className={styles["start"]}>
            <NavLink to={'/'} className={styles["heading-start"]} onClick={() => showMenu(false)}>
            Начало
            </NavLink>
            <NavLink to={'/create'} onClick={() => showMenu(false)}>+ Публикувай обява</NavLink>
            <NavLink to={'/myAdd'} onClick={() => showMenu(false)}>Моите обяви</NavLink>
        </section>
        <section className={styles["menu-options"]}>
            {isAuthenticated ? (
                <a href="#">Изход</a>
            ) : (
                <>
                <NavLink to={'/login'} onClick={() => showMenu(false)}>Вход</NavLink>
                <NavLink to={'/register'} onClick={() => showMenu(false)}>Регистрация</NavLink>
                </>
            )}
        </section>
        </div>
    );
}
