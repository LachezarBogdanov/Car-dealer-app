import { useContext } from 'react';
import styles from '../ModelSearch/ModelSearch.module.css'
import { SearchContext } from '../../contexts/SearchContext';

export default function ModelSearch({
    onClose,
    btnValues,
    name
}) {
  const { setData, model, city } = useContext(SearchContext);

  const handleModelOrCityChoose = (e) => {
    const targetValue = e.target.dataset.value;

    switch (name) {
      case 'Марка':
          setData(prev => (
            {
              ...prev,
              model: targetValue
            }
          ));
        break;
      case 'Къде':
          setData(prev => (
            {
              ...prev,
              city: targetValue
            }
          ));
        break;
      default:
        break;
    };
    
    onClose();

  }

  const handleClearButton = () => {
    switch (name) {
      case 'Марка':
          setData(prev => (
            {
              ...prev,
              model: ''
            }
          ))
        break;
      case 'Къде':
        setData(prev => (
          {
            ...prev,
            city: ''
          }
        ))
        break;
    };

    onClose();
  }
    
  return (
    <>
     <div className={styles.overlay} onClick={onClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.head}>
              <i className="fa-solid fa-arrow-left" onClick={() => onClose()}></i>
              {
                (
                  (name === 'Марка' && model) ||
                  (name === 'Къде' && city)
                ) && (
                  <span className={styles.clear} onClick={handleClearButton}>
                    Clear
                  </span>
                )
                }
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
                  <span 
                    className={`${styles.tag} ${
                      (name === 'Марка' && model === value) ||
                      (name === 'Къде' && city === value)
                      ? styles.active
                      : ''
                    }`} 
                    key={index}
                    data-value={value}
                    onClick={handleModelOrCityChoose}
                  >
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
