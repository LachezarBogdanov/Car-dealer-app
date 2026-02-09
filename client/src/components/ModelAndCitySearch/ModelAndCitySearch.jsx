import { useContext, useState } from 'react';
import styles from './ModelAndCitySearch.module.css'
import { SearchContext } from '../../contexts/SearchContext';

export default function ModelSearch({
    onClose,
    btnValues,
    name
}) {
  const { setData, model, city } = useContext(SearchContext);
  const [search, setSearch] = useState('');

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

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
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
                <input
                id="search"
                type="text"
                className={styles.inputSearch}
                placeholder=" "
                maxLength={20}
                onChange={handleSearch}
              />
              <label htmlFor="search">
                <i className="fa-solid fa-magnifying-glass"></i>
                Търси {name === 'Марка' ? 'марка' : 'град'}
              </label>
              <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
            </div>
    
            <div className={styles.buttons}>
              {
                btnValues.filter(value => 
                  value.toLowerCase().includes(search)
                )
                .map((value, index) => (
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
