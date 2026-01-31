import { NavLink } from 'react-router';
import styles from './Header.module.css'

export default function Header({
    showMenu,
}) {
    
    return (
         <header>
    <section className={styles["sidebar-left"]}>
        <div className={styles["ham"]} onClick={() => showMenu(prev => !prev)}>
        <span />
        <span />
        <span />
        </div>
        <div className={styles["logo"]}>
        <h1>
            <NavLink to={'/'} className={styles['heading']}>
            CARS.bg
            </NavLink></h1>
        </div>
    </section>
    <section className={styles["sidebar-right"]}>
        <div className={styles["favourites-icon"]}>
            <NavLink to={'/myCars'}>
                <i className="fa-regular fa-heart"></i>
            </NavLink>
        </div>
        <div className={styles["sort-by"]}>
        <i className="fa-solid fa-sort" />
        </div>
        <div className={styles["search"]}>
        <i className="fa-solid fa-magnifying-glass" />
        </div>
    </section>
    </header>

    );
}
