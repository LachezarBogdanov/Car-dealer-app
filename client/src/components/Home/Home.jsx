// import { useState } from 'react';
import { useState } from 'react';
import { useGetCars } from '../../api/carApi';
import Car from '../Car/Car';
import styles from './Home.module.css'

export default function Home() {
    const { cars } = useGetCars();
    const [isOpen, setIsOpen] = useState(false);

  //   const [filters, setFilters] = useState({
  //     compartment: null,
  //     model: null,
  //     fuelType: null,
  //     gears: null,
  //     price: null,
  //     year: null,
  //     city: null,
  //     color: null,
  //     doorCount: null,
  //     power: null,
  //     condition: null,
  // });

  const handleOpenModal = () => {
    setIsOpen(true);
  }
    
    return (
        <main>
  <div className={styles["filters-container"]}>
    <div className={styles["filter-tags"]}>
      <span className={styles["tag"]} onClick={handleOpenModal}>Купе</span>
      <span className={`${styles["tag"]} ${styles["selected"]}`}>Марка: BMW</span>
      <span className={styles["tag"]}>Гориво</span>
      <span className={styles["tag"]}>Скорости</span>
      <span className={styles["tag"]}>Цена</span>
      <span className={`${styles["tag"]} ${styles["selected"]}`}>Година: 2020+</span>
      <span className={styles["tag"]}>Къде</span>
      <span className={styles["tag"]}>Цвят</span>
      <span className={styles["tag"]}>Брой врати</span>
      <span className={styles["tag"]}>Мощност</span>
    </div>
  </div>
  <section className={styles["car-listings"]}>
    {cars.map(car => (<Car key={car._id} car={car}/>))}
  </section>
</main>

    );
}
