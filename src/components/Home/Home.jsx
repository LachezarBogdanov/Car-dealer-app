import styles from './Home.module.css'

export default function Home() {
    return (
        <main>
  <div className={styles["filters-container"]}>
    <div className={styles["filter-tags"]}>
      <span className={styles["tag"]}>Купе</span>
      <span className={`${styles["tag"]} ${styles["selected"]}`}>Марка: BMW</span>
      <span className={styles["tag"]}>Гориво</span>
      <span className={styles["tag"]}>Скорости</span>
      <span className={styles["tag"]}>Цена</span>
      <span className={`${styles["tag"]} ${styles["selected"]}`}>Година: 2020+</span>
      <span className={styles["tag"]}>Къде</span>
      <span className={styles["tag"]}>От</span>
      <span className={styles["tag"]}>Цвят</span>
      <span className={styles["tag"]}>Брой врати</span>
      <span className={styles["tag"]}>Мощност</span>
      <span className={styles["tag"]}>Екстри</span>
      <span className={styles["tag"]}>Волан</span>
      <span className={styles["tag"]}>Публикувани</span>
    </div>
  </div>
  <section className={styles["car-listings"]}>
    <div className={styles["car-card"]}>
      <div className={styles["car-top"]}>
        <span className={styles["timestamp"]}>Dnes 18:00</span>
        <i className="fa-regular fa-heart favourite" />
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
    <div className={styles["car-card"]}>
      <div className={styles["car-top"]}>
        <span className={styles["timestamp"]}>Dnes 18:00</span>
        <i className="fa-regular fa-heart favourite" />
      </div>
      <div className={styles["img-price"]}>
        <img src="mercedes.jpg" alt="Hyundai i30" />
        <div className={styles["car-price"]}>
          <span className={styles["price-bgn"]}>5,999 BGN</span>
          <span className={styles["price-eur"]}>3,067.24 EUR</span>
        </div>
      </div>
      <h3>Hyundai i30 1.4i-LPG</h3>
      <p className={styles["details"]}>2010, Бензин, 169841 км.</p>
      <p className={styles["description"]}>!!!УНИКАЛЕН АВТОМОБИЛ!!!</p>
      <p className={styles["location"]}>частно лице, Стара Загора</p>
    </div>
  </section>
</main>

    );
}
