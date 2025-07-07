import Car from '../Car/Car';
import styles from './Home.module.css'

export default function Home() {
    const cars = ['car1', 'car2'];
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
    {cars.map(car => (<Car key={car} car={car}/>))}
  </section>
</main>

    );
}
