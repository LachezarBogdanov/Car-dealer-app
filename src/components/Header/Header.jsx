import styles from './Header.module.css'

export default function Header() {
    return (
         <header>
    <section className={styles["sidebar-left"]}>
        <div className={styles["ham"]}>
        <span />
        <span />
        <span />
        </div>
        <div className={styles["logo"]}>
        <h1>CARS.bg</h1>
        </div>
    </section>
    <section className={styles["sidebar-right"]}>
        <div className={styles["favourites-icon"]}>
        <i className="fa-regular fa-heart" />
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
