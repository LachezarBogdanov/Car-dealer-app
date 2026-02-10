// import { useState } from 'react';
import { useContext, useState } from 'react';
import { useGetCars } from '../../api/carApi';
import Car from '../Car/Car';
import styles from './Home.module.css'
import BasicSearch from '../BasicSearch/BasicSearch';
import ModelSearch from '../ModelAndCitySearch/ModelAndCitySearch';
import PriceRangeModal from '../PriceRangeModal/PriceRangeModal';
import PowerRangeModal from '../PowerRangeModal/PowerRangeModal';
import YearSearchModal from '../YearSearchModal/YearSearchModal';
import { SearchContext } from '../../contexts/SearchContext';

export default function Home() {
    const { cars } = useGetCars();
    console.log(cars);
    
    const [isOpen, setIsOpen] = useState(false);
    const [modalProperties, setModalProperties] = useState([]);
    const [modalName, setModalName] = useState('');
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenPrice, setIsOpenPrice] = useState(false);
    const [isOpenPower, setIsOpenPower] = useState(false);
    const [isOpenYear, setIsOpenYear] = useState(false);
    const { 
      compartment,
      fuelType,
      gears,
      color,
      doorCount,
      model,
      city,
      priceMin,
      priceMax,
      yearMin,
      yearMax,
      powerMin,
      powerMax
     } = useContext(SearchContext);

  const filteredCars = cars.filter(car => {
    if(compartment && car.compartment !== compartment) {
      return false;
    }

    if(model && car.model !== model) {
      return false;
    }

    if(fuelType && car.fuelType !== fuelType) {
      return false;
    }

    if(gears && car.gears !== gears) {
      return false;
    }

    if(
      priceMin !== null && Number(car.price) < priceMin ||
      priceMax !== null && Number(car.price) > priceMax
    ) {
      return false;
    }

    if(
      yearMin !== null && Number(car.year) < yearMin ||
      yearMax !== null && Number(car.year) > yearMax
    ) {
      return false;
    }

    if(city && car.city !== city) {
      return false;
    }

    if(color && car.color !== color) {
      return false;
    }

    if(doorCount && car.doorCount !== doorCount) {
      return false;
    }

    if(
      powerMin !== null && Number(car.power) < powerMin ||
      powerMax !== null && Number(car.power) > powerMax
    ) {
      return false;
    }

    return true;
  });

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

  const handleOpenPowerModal = () => {
    setIsOpenPower(true);
  }

  const handleOpenYearModal = () => {
    setIsOpenYear(true);
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

  const handleClosePower = () => {
    setIsOpenPower(false);
  }

  const handleCloseYear = () => {
    setIsOpenYear(false);
  }
    
    return (
        <main>
  <div className={styles["filters-container"]}>
    <div className={styles["filter-tags"]}>

      <span 
        className={`${styles.tag} ${compartment ? styles.selected : ''}`} 
        onClick={handleCompartmentModal}
        >
          Купе{compartment ? `${': '}${compartment}` : ''}
      </span>

      <span 
        className={`${styles["tag"]} ${model ? styles.selected : ''}`} 
        onClick={handleModelChooseModal}
        >
          Марка{model ? `${': '}${model}` : ''}
        </span>

      <span 
        className={`${styles["tag"]} ${fuelType ? styles.selected : ''}`} 
        onClick={handleFuelModal}
      >
        Гориво{fuelType ? `${': '}${fuelType}` : ''}
      </span>

      <span 
        className={`${styles["tag"]} ${gears ? styles.selected : ''}`} 
        onClick={handleGearsModal}
      >
        Скорости{gears ? `${': '}${gears}` : ''}
      </span>

      <span 
        className={`${styles["tag"]} ${
          priceMin ||
          priceMax
          ? styles.selected
          : ''
        }`}
        onClick={handleOpenPriceModal}
        >
          Цена{
            priceMin === 0 && priceMax < 50000
            ? `: До ${priceMax} EUR`
            : priceMin > 0 && priceMax === 50000
            ? `: От ${priceMin} EUR`
            : priceMin > 0 && priceMax < 50000
            ? `: От ${priceMin} EUR До ${priceMax} EUR`
            : priceMin === 0 && priceMax === 50000
            ? `: Всички`
            : ''
          }
        </span>

      <span 
        className={`${styles["tag"]} ${
          yearMin ||
          yearMax ?
          styles.selected 
          : ''
        }`} 
        onClick={handleOpenYearModal}
        >
          Година{
            yearMin === 1970 && yearMax < 2026
            ? `: До ${yearMax}`
            : yearMin > 1970 && yearMax === 2026
            ? `: От ${yearMin}`
            : yearMin > 1970 && yearMax < 2026
            ? `: От ${yearMin} До ${yearMax}`
            : yearMin === 1970 && yearMax === 2026
            ? `: Всички`
            : ''
          }
        </span>

      <span 
        className={`${styles["tag"]} ${city ? styles.selected : ''}`} 
        onClick={handleWhereChooseModal}
        >
          Къде{city ? `${': '}${city}` : ''}
        </span>

      <span 
        className={`${styles["tag"]} ${color ? styles.selected : ''}`} 
        onClick={handleColorModal}
      >
        Цвят{color ? `${': '}${color}` : ''}
      </span>

      <span 
        className={`${styles["tag"]} ${doorCount ? styles.selected : ''}`} 
        onClick={handleDoorCountModal}
      >
        Брой врати{doorCount ? `${': '}${doorCount}` : ''}
      </span>

      <span 
        className={`${styles["tag"]} ${
          powerMin ||
          powerMax ?
          styles.selected
          : ''
        }`} 
        onClick={handleOpenPowerModal}
        >
          Мощност{
            powerMin === 0 && powerMax < 454
            ? `: До ${powerMax}к.с.`
            : powerMin > 0 && powerMax === 454
            ? `: От ${powerMin}к.с.`
            : powerMin > 0 && powerMax < 454
            ? `: От ${powerMin}к.с. До ${powerMax}к.с.`
            : powerMin === 0 && powerMax === 454
            ? `: Всички`
            : ''
          }
        </span>
    </div>
  </div>
  <section className={styles["car-listings"]}>
    {filteredCars.map(car => (<Car key={car._id} car={car}/>))}
  </section>

  {isOpen &&
    <BasicSearch onClose={handleCloseModal} btnValues={modalProperties} name={modalName} />}

  {isOpenModal &&
    <ModelSearch onClose={handleCloseModelModal} btnValues={modalProperties} name={modalName} />}

  {isOpenPrice &&
    <PriceRangeModal onClose={handleClosePrice} />}

  {isOpenPower &&
    <PowerRangeModal onCLose={handleClosePower}/>}

  {isOpenYear &&
    <YearSearchModal onClose={handleCloseYear}/>}
</main>

    );
}
