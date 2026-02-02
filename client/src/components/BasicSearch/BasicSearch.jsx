import styles from '../BasicSearch/BasicSearch.module.css';

export default function BasicSearchModal() {
  return (
    <>
        <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.head}>
          <i className="fa-solid fa-arrow-left"></i>
          <h1>Купе</h1>
        </div>

        <div className={styles.buttons}>
          <span className={styles.tag}>Седан</span>
          <span className={styles.tag}>Хечбег</span>
          <span className={styles.tag}>Комби</span>
          <span className={styles.tag}>Купе</span>
          <span className={styles.tag}>Кабрио</span>
          <span className={styles.tag}>Джип</span>
          <span className={styles.tag}>Пикап</span>
          <span className={styles.tag}>Ван</span>
        </div>
      </div>
    </div>
    </>
  );
};
