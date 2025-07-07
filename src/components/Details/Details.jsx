import styles from './Details.module.css'

export default function Details() {
    return (
        <main>
  <section className={styles["car-details"]}>
    <div className={styles["car-heading"]}>
      <p className={styles["car-title"]}>Kia Ceed 1.4i</p>
      <div className={styles["price"]}>
        <p className={styles["bgn"]}>4.500 BGN</p>
        <p className={styles["eur"]}>2,300 EUR</p>
      </div>
    </div>
    <div className={styles["car-info"]}>
      <p className={styles["extras"]}>
        Септември 2010, Комби, Употребяван автомобил, нов внос, В добро
        състояние, Дизел, 224 450км, Ръчни скорости, 177к.с., EURO 5, 2000см3,
        4/5 врати, Черен металик
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
        <img src="mercedes.jpg" alt="Main Car Image" className={styles["main-image"]} />
        <div className={styles["pagination"]}>
          <span className={`${styles['dot']} ${styles['active']}`} />
          <span className={styles["dot"]} />
          <span className={styles["dot"]} />
          <span className={styles["dot"]} />
        </div>
        <div className={styles["thumbnails"]}>
          <img src="mercedes.jpg" alt="thumb1" />
          <img src="mercedes.jpg" alt="thumb2" />
          <img src="mercedes.jpg" alt="thumb3" />
          <img src="mercedes.jpg" alt="thumb4" />
          <img src="mercedes.jpg" alt="thumb5" />
          <img src="mercedes.jpg" alt="thumb6" />
          <img src="mercedes.jpg" alt="thumb7" />
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
