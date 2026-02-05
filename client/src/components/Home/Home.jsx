// import { useState } from 'react';
import { useState } from 'react';
import { useGetCars } from '../../api/carApi';
import Car from '../Car/Car';
import styles from './Home.module.css'
import BasicSearch from '../BasicSearch/BasicSearch';
import ModelSearch from '../ModelSearch/ModelSearch';
import PriceRangeModal from '../PriceRangeModal/PriceRangeModal';

export default function Home() {
    const { cars } = useGetCars();
    const [isOpen, setIsOpen] = useState(false);
    const [modalProperties, setModalProperties] = useState([]);
    const [modalName, setModalName] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenPrice, setIsOpenPrice] = useState(false);

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

  const handleModelChooseModal = () => {
    setModalProperties([
      'VW',
      'Mercedes-Benz',
      'BMW',
      'Audi',
      'Opel',
      'Peugeot',
      'Toyota',
      'Ford',
      'Renault',
      'Citroen',
      'Nissan',
      'Hyundai',
      'Honda',
      'Kia',
      'Skoda',
      'Fiat',
      'Mazda',
      'Seat',
      'Mitsubishi',
      'Volvo',
      'Dacia',
      'Suzuki',
      'Subaru',
      'Chevrolet',
      'Jeep',
      'Land Rover',
      'Alfa Romeo',
      'Mini',
      'Porsche',
      'Daihatsu',
      'Lexus',
      'Jaguar',
      'Lancia',
      'Chrysler',
      'Ssangyong',
      'Smart',
      'Dodge',
      'Lada',
      'Infiniti',
      'Saab',
      'Rover',
      'Tesla',
      'Daewoo',
      'Range Rover',
      'Great Wall',
      'Isuzu',
      'DS',
      'Maserati',
      'Cadillac',
      'Moskvich',
      'UAZ',
      'Bentley',
      'Tata',
      'Trabant',
      'DR',
      'Acura',
      'Wartburg',
      'Hummer',
      'Lincoln',
      'MG',
      'GMC',
      'GAZ',
      'Volga',
      'Cupra',
      'Lamborghini',
      'Haval',
      'Aston Martin',
      'Pontiac',
      'BYD',
      'Zaz',
      'Rolls Royce',
      'Mahindra',
      'Maybach',
      'Buick',
      'DFSK',
      'Ferrari',
      'Asia Motors',
      'Genesis',
      'McLaren',
      'Iveco',
      'ВАЗ',
      'Simca',
      'Lync and Co',
      'Corvette',
      'Yogomo',
      'Talbot',
      'BAW',
      'Microcar',
      'NSU',
      'Scion',
      'Polestar',
      'Alpina',
      'Варшава',
      'Plymouth',
      'Aro',
      'Zastava',
      'Landwind',
      'Excalibur',
      'Jmev',
      'Ligier',
      'Cenntro',
      'Gac Gonow',
      'Lotus',
      'Aixam',
      'Austin',
      'Datsun',
    ]);

    setModalName('Марка');

    setIsOpenModal(true);
  }

  const handleWhereChooseModal = () => {
    setModalProperties([
      'София',
      'Варна',
      'Пловдив',
      'Враца',
      'Бургас',
      'Стара Загора',
      'Дупница',
      'Монтана',
      'Шумен',
      'Хасково',
      'Плевен',
      'Сливен',
      'Русе',
      'Добрич',
      'Велико Търново',
      'Пазарджик',
      'Перник',
      'Казанлък',
      'Благоевград',
      'Габрово',
      'Кюстендил',
      'Разград',
      'Силистра',
      'Кърджали',
      'Троян',
      'Ямбол',
      'Търговище',
      'Димитровград',
      'Видин',
      'Петрич',
      'Гоце Делчев',
      'Асеновград',
      'Лясковец',
      'Карлово',
      'Провадия',
      'Горна Оряховица',
      'Септември',
      'Панагюрище',
      'Червен бряг',
      'Елин Пелин',
      'Велинград',
      'Айтос',
      'Свищов',
      'Харманли',
      'Смолян',
      'Луковит',
      'Левски',
      'Ловеч',
      'Кирилово',
      'Нови пазар',
    ]);

    setModalName('Къде');

    setIsOpenModal(true);
  }

  const handleOpenPriceModal = () => {
    setIsOpenPrice(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  const handleCloseModelModal = () => {
    setIsOpenModal(false);
  }

  const handleClosePrice = () => {
    setIsOpenPrice(false);
  }
    
    return (
        <main>
  <div className={styles["filters-container"]}>
    <div className={styles["filter-tags"]}>
      <span className={styles["tag"]} onClick={handleCompartmentModal}>Купе</span>
      <span className={`${styles["tag"]} ${styles["selected"]}`} onClick={handleModelChooseModal}>Марка: BMW</span>
      <span className={styles["tag"]} onClick={handleFuelModal}>Гориво</span>
      <span className={styles["tag"]} onClick={handleGearsModal}>Скорости</span>
      <span className={styles["tag"]} onClick={handleOpenPriceModal}>Цена</span>
      <span className={`${styles["tag"]} ${styles["selected"]}`}>Година: 2020+</span>
      <span className={styles["tag"]} onClick={handleWhereChooseModal}>Къде</span>
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

  {isOpenModal &&
    <ModelSearch onClose={handleCloseModelModal} btnValues={modalProperties} name={modalName} />}

  {isOpenPrice &&
    <PriceRangeModal onClose={handleClosePrice} />}
</main>

    );
}
