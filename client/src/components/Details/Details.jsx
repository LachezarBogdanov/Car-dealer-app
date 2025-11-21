import { useParams } from 'react-router';
import styles from './Details.module.css'
import { useGetCar } from '../../api/carApi';
import { useEffect, useState } from 'react';

export default function Details() {
  const { carId } = useParams();
  const { car } = useGetCar(carId);
  const date = new Date(car._createdOn);
  const [mainImage, setMainImage] = useState(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  console.log(car);
  

  useEffect(() => {
    if(car?.images) {
      setMainImage(car.images[0]);
    }
  }, [setMainImage, car.images]);

    const formatedDate = 
        date.getDate()
        + "/"
        + (date.getMonth() + 1)
        + "/"
        + date.getFullYear();
  
    const handleMainImageChange = (newImage, index) => {
      setMainImage(newImage);
      setMainImageIndex(index);
    }
  
    return (
        <main>
  <section className={styles["car-details"]}>
    <div className={styles["car-heading"]}>
      <p className={styles["car-title"]}>{car.model} {car.modifications}</p>
      <div className={styles["price"]}>
        <p className={styles["bgn"]}>{car.price} BGN</p>
        <p className={styles["eur"]}>{car.price * 0.51} EUR</p>
      </div>
    </div>
    <div className={styles["car-info"]}>
      <p className={styles["extras"]}>
        {formatedDate},
        {car.compartment},
        {" " + car.condition}, 
        {" " + car.description}, 
        {" " + car.fuelType}, 
        {" " + car.mileage}км, 
        {" " + car.gears} скорости, 
        {" " + car.power}, 
        {" " + car.cubature}см3,
        {" " + car.doorCount} врати,  
        {" " + car.color},
        {" " + car.year},
        {" " + car.city}
      </p>
    </div>
    <div className={styles["container"]}>
      <div className={styles["description"]}>
        <p>
          <b>Нов внос от Германия!</b> Един предишен собственик, който е вписан
          в талона. Всичко работи безупречно по автомобила! <b>ПЕРФЕКТЕН!</b>{" "}
          Високо ниво на оборудване! Панорамен таван, автопилот, навигация, ел.
          пакет, адаптивни фарове, полу кожен салон, Hands free и много други
          екстри!!! Два комплекта гуми с джанти! Без пребоядисани детайли
          абсолютно! Салона и интериора са изключително запазени! Възможност за
          тест драйв с фирмени номера! Съдействие при регистрация и транзитни
          номера!
        </p>
        <h3>Особености и Екстри</h3>
        <p>
          <b>Комфорт:</b> Климатроник, Кожен салон, Ел. стъкла, Ел. огледала,
          Подгряване на седалки, Шибедах, Стерео уредба, Алуминиеви джанти,
          Мултифункционален волан
        </p>
        <p>
          <b>Сигурност:</b> ABS, Airbag, Ксенонови фарове, Халогенни фарове,
          Парктроник, Аларма, Имобилайзер, Центр. заключване, Старт-Стоп система
        </p>
        <p>
          <b>Друго:</b> Автопилот, Серво управление, Бордови компютър, Сервизна
          книжка, Навигационна система, Панорамен покрив
        </p>
        <p>
          <b>ADMRIAL AUTO 1</b>
          <br />
          Добрич
        </p>
      </div>
      <div className={styles["gallery"]}>
        <img src={mainImage} alt="Main Car Image" className={styles["main-image"]} />
        <div className={styles["pagination"]}>
          {car?.images?.map((_, index) => (
             <span key={index} className={`${styles['dot']} ${mainImageIndex == index ? `${styles['active']}` : ''}`}/>
          ))}
        </div>
        <div className={styles["thumbnails"]}>
          {car?.images?.map((img, index) => 
              <img key={index} src={img} alt="thumb1" onClick={() => handleMainImageChange(img, index)} />
          )}
          
        </div>
      </div>
    </div>
    <div className={styles["contacts"]}>
      <p className={styles["contact-heading"]}>kontakt s prodavacha</p>
      <button className={styles["phone-btn"]}>
        <i className="fa-solid fa-phone" />
        0889111111
      </button>
    </div>
  </section>
</main>

    );
}
