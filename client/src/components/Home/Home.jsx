// import { useState } from 'react';
import { useState } from 'react';
import { useGetCars } from '../../api/carApi';
import Car from '../Car/Car';
import styles from './Home.module.css'
import BasicSearch from '../BasicSearch/BasicSearch';

export default function Home() {
    const { cars } = useGetCars();
    const [isOpen, setIsOpen] = useState(false);
    const [modalProperties, setModalProperties] = useState([]);
    const [modalName, setModalName] = useState('');

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

  const handleCompartmentModal = () => {
    setModalProperties([
      'Седан',
      'Хечбег',
      'Комби',
      'Купе',
      'Кабрио',
      'Джип',
      'Пикап',
      'Ван'
    ]);

    setModalName('Купе');

    setIsOpen(true);
  }

  const handleFuelModal = () => {
    setModalProperties([
      'Бензин',
      'Дизел',
      'Газ/Бензин',
      'Метан/Бензин',
      'Хибрид',
      'Електричество',
    ]);

    setModalName('Гориво');

    setIsOpen(true);
  };

  const handleGearsModal = () => {
    setModalProperties([
          'Ръчни',
          'Автоматични',
        ]);

    setModalName('Скорости');

    setIsOpen(true);
  }

  const handleColorModal = () => {
    setModalProperties([
          'Бежов',
          'Бордо',
          'Бронзов',
          'Бял',
          'Виолетов',
          'Жълт',
          'Зелен',
          'Златен',
          'Кафяв',
          'Оранжев',
          'Сив',
          'Син',
          'Сребърен',
          'Червен',
          'Черен',
          'Лилав',
          'Охра',
          'Перла',
          'Розов',
          'Хамелеон',
          'Светло зелен',
          'Светло син',
          'Тъмно зелен',
          'Тъмно сив',
          'Тъмно син',
        ]);

    setModalName('Цвят');

    setIsOpen(true);
  }

  const handleDoorCountModal = () => {
    setModalProperties([
          '2/3',
          '4/5',
        ]);

    setModalName('Брой врати');

    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }
    
    return (
        <main>
  <div className={styles["filters-container"]}>
    <div className={styles["filter-tags"]}>
      <span className={styles["tag"]} onClick={handleCompartmentModal}>Купе</span>
      <span className={`${styles["tag"]} ${styles["selected"]}`}>Марка: BMW</span>
      <span className={styles["tag"]} onClick={handleFuelModal}>Гориво</span>
      <span className={styles["tag"]} onClick={handleGearsModal}>Скорости</span>
      <span className={styles["tag"]}>Цена</span>
      <span className={`${styles["tag"]} ${styles["selected"]}`}>Година: 2020+</span>
      <span className={styles["tag"]}>Къде</span>
      <span className={styles["tag"]} onClick={handleColorModal}>Цвят</span>
      <span className={styles["tag"]} onClick={handleDoorCountModal}>Брой врати</span>
      <span className={styles["tag"]}>Мощност</span>
    </div>
  </div>
  <section className={styles["car-listings"]}>
    {cars.map(car => (<Car key={car._id} car={car}/>))}
  </section>

  {isOpen &&
    <BasicSearch onClose={handleCloseModal} btnValues={modalProperties} name={modalName} />}
</main>

    );
}
