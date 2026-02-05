import { useContext } from 'react';
import styles from '../BasicSearch/BasicSearch.module.css';
import { SearchContext } from '../../contexts/SearchContext';

export default function BasicSearch({
  onClose,
  btnValues,
  name,
}) {
  const { setData } = useContext(SearchContext);
  // const [activeValue, setActiveValue] = useState(null);
  const { compartment, fuelType, gears, doorCount, color } = useContext(SearchContext);

  const handleSearchChoose = (e) => {
    const targetValue = e.target.dataset.value;

    // setActiveValue(targetValue);

    switch (name) {
      case 'Купе':
              setData(prev => (
          {...prev, 
            compartment: targetValue
          }
        ))
        break;
      case 'Гориво':
              setData(prev => (
          {...prev, 
            fuelType: targetValue
          }
        ))
        break;
      case 'Скорости':
              setData(prev => (
          {...prev, 
            gears: targetValue
          }
        ))
        break;
      case 'Цвят':
           setData(prev => (
          {...prev, 
            color: targetValue
          }
        ))
        break;
      case 'Брой врати':
              setData(prev => (
          {...prev, 
            doorCount: targetValue
          }
        ))
        break;
    };

    onClose();

  }

  const handleClearButton = () => {
    switch (name) {
      case 'Купе':
              setData(prev => (
          {...prev, 
            compartment: ''
          }
        ))
        break;
      case 'Гориво':
              setData(prev => (
          {...prev, 
            fuelType: ''
          }
        ))
        break;
      case 'Скорости':
              setData(prev => (
          {...prev, 
            gears: ''
          }
        ))
        break;
      case 'Цвят':
           setData(prev => (
          {...prev, 
            color: ''
          }
        ))
        break;
      case 'Брой врати':
              setData(prev => (
          {...prev, 
            doorCount: ''
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
            (name === 'Купе' && compartment) ||
            (name === 'Гориво' && fuelType) ||
            (name === 'Скорости' && gears) ||
            (name === 'Брой врати' && doorCount) ||
            (name === 'Цвят' && color)
          ) && (
            <span className={styles.clear} onClick={handleClearButton}>
              Clear
            </span>
          )
          }
          <h1>{name}</h1>
        </div>

        <div className={styles.buttons}>
          {
            btnValues.map((value, index) => (
              <span
               className={`${styles.tag} ${
                (name === 'Купе' && value === compartment) ||
                (name === 'Гориво' && value === fuelType) ||
                (name === 'Скорости' && value === gears) ||
                (name === 'Цвят' && value === color) ||
                (name === 'Брой врати' && value === doorCount)
                ? styles.active
                : ''
               }`}
               key={index} 
               onClick={handleSearchChoose}
               data-value={value}
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
