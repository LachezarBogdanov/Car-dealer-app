import styles from '../ModelSearch/ModelSearch.module.css'

export default function ModelSearch({
    onClose,
    btnValues,
    name
}) {
    
  return (
    <>
     <div className={styles.overlay} onClick={onClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.head}>
              <i className="fa-solid fa-arrow-left" onClick={() => onClose()}></i>
              <h1>{name}</h1>
            </div>

            <div className={styles.search}>
                <input className={styles.inputSearch} id='search' type="text" maxLength={20} />
                <label htmlFor="search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  Търси {name === 'Марка' ? 'марка' : 'град'}
                </label>
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
