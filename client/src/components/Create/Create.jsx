import styles from './Create.module.css'

export default function Create() {
    return (
        <>
  <div className={styles["upload-wrapper"]}>
    <h3>Качете снимки</h3>
    <div className={styles["info-box"]}>
      ℹ️ За да качите няколко снимки, изберете от файловата система до 5 броя
    </div>
    <div className={styles["image-grid"]}>
      <label className={styles["image-box"]}>
        <input type="file" accept="image/*" />
        <span className={styles["placeholder"]}>1</span>
      </label>
      <label className={styles["image-box"]}>
        <input type="file" accept="image/*" />
        <span className={styles["placeholder"]}>2</span>
      </label>
      <label className={styles["image-box"]}>
        <input type="file" accept="image/*" />
        <span className={styles["placeholder"]}>3</span>
      </label>
      <label className={styles["image-box"]}>
        <input type="file" accept="image/*" />
        <span className={styles["placeholder"]}>4</span>
      </label>
      <label className={styles["image-box"]}>
        <input type="file" accept="image/*" />
        <span className={styles["placeholder"]}>5</span>
      </label>
    </div>
  </div>
  <ul className={styles["options"]}>
    <li>
      <a href="#">
        Състояние*:
        <span className={styles["static"]}>Изберете</span>
      </a>
    </li>
    <li>
      <a href="#">
        Марка, Модел*:
        <span className={styles["static"]}>Изберете</span>
      </a>
    </li>
    <li>
      <div>
        Модификация*:
        <input
          type="text"
          name="Modify"
          className={styles["input-modify"]}
          maxLength={15}
          placeholder="Пример: 2.2, CDI"
        />
      </div>
    </li>
    <li>
      <a href="#">
        Купе*:
        <span className={styles["static"]}>Изберете</span>
      </a>
    </li>
    <li>
      <a href="#">
        Цена*:
        <input type="number" name="price" min={0} className={styles["input-modify"]} />
      </a>
    </li>
    <li>
      <a href="#">
        Скорости*:
        <span className={styles["static"]}>Изберете</span>
      </a>
    </li>
    <li>
      <a href="#">
        Гориво*:
        <span className={styles["static"]}>Изберете</span>
      </a>
    </li>
    <li>
      <div>
        Мощност*:
        <input
          type="text"
          name="horse-powers"
          className={styles["input-modify"]}
          placeholder="Мощност ]}к.с."
        />
      </div>
    </li>
    <li>
      <div>
        Кубатура*:
        <input
          type="text"
          name="cubature"
          className={styles["input-modify"]}
          placeholder="Мощност к.с."
        />
      </div>
    </li>
    <li>
      <a href="#">
        Година*:
        <span className={styles["static"]}>Изберете</span>
      </a>
    </li>
    <li>
      <div>
        Пробег*:
        <input
          type="text"
          name="kilometres"
          className={styles["input-modify"]}
          placeholder="km"
        />
      </div>
    </li>
    <li>
      <a href="#">
        Брой врати*:
        <span className={styles["static"]}>Изберете</span>
      </a>
    </li>
    <li>
      <a href="#">
        Цвят*:
        <span className={styles["static"]}>Изберете</span>
      </a>
    </li>
    <li>
      <div>
        Град, село*:
        <input
          type="text"
          name="city"
          className={styles["input-modify"]}
          placeholder="Самоков"
        />
      </div>
    </li>
    <li>
      <textarea
        name="description"
        id="description"
        className={styles["descriptionText"]}
        defaultValue={"Описание"}
      />
    </li>
    <button className={styles["publish-btn"]}>Публикувай</button>
  </ul>
</>

    );
}
