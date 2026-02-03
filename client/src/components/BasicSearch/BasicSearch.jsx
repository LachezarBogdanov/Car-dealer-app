import styles from '../BasicSearch/BasicSearch.module.css';

export default function BasicSearch({
  onClose,
  btnValues,
  name,
}) {
  
  return (
    <>
        <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.head}>
          <i className="fa-solid fa-arrow-left" onClick={() => onClose()}></i>
          <h1>{name}</h1>
        </div>

        <div className={styles.buttons}>
          {
            btnValues.map((value, index) => (
              <span className={styles.tag} key={index}>
                {value}
              </span>
            ))
          }
        </div>
      </div>
    </div>
    </>
  );
};
