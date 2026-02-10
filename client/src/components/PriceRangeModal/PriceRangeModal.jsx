import { useContext, useEffect, useState, useMemo } from 'react';
import styles from '../PriceRangeModal/PriceRangeModal.module.css';
import { Range } from 'react-range';
import { SearchContext } from '../../contexts/SearchContext';

const STEP = 500;
const min = 0;
const max = 50000;

export default function PriceRangeModal({
    onClose,
}) {
    const { setData, priceMin, priceMax } = useContext(SearchContext);

    const rangeValues = useMemo(() => {
  const hasMin = priceMin != null && priceMin > min;
  const hasMax = priceMax != null && priceMax < max;

  if (hasMin && hasMax) {
    return [priceMin, priceMax]; 
  }

  if (hasMin) {
    return [priceMin, max]; 
  }

  if (hasMax) {
    return [min, priceMax]; 
  }

  return [min, max]; 
}, [priceMin, priceMax]);
    
    const [values, setValues] = useState(rangeValues);

     const isPriceChanged =
        values[0] > min  ||
        values[1] < max ;


    useEffect(() => {
        setValues(rangeValues);
    }, [rangeValues])
    

    const handleCofirmBtn = () => {
        
        setData(prev => (
            {
                ...prev,
                priceMin: values[0],
                priceMax: values[1]
            }
        ));

        onClose();
    }

    const handleClearBtn = () => {
        if(priceMin || priceMax) {
            setData(prev => (
                {
                    ...prev,
                    priceMin: null,
                    priceMax: null
                }
            ))
        };

        onClose();
    };

  return (
    <>
        <div className={styles.priceOverlay} onClick={onClose}>
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.priceHead}>
                <i className="fa-solid fa-arrow-left" onClick={onClose}></i>
                {isPriceChanged && (
                <span className={styles.confirm} onClick={handleCofirmBtn}>
                    Потвърди
                </span>
                )}
                {
                    (priceMin && priceMin !== 0 || priceMax && priceMax !== 50000 )
                    && (
                        <span className={styles.clear} onClick={handleClearBtn}>
                            Clear
                        </span>
                    )
                }
                <h1>Цена</h1>
            </div>
            <div className={styles.labels}>
                <span>{values[0]} EUR</span>
                <span>{values[1]} {values[1] === 50000 ? '+' : ''} EUR</span>
            </div>

        <Range
            step={STEP}
            min={min}
            max={max}
            values={values}
            onChange={setValues}
            renderTrack={({props, children}) => (
                <div {...props} className={styles.track}>
                    {children}
                </div>
            )}
            renderThumb={({props}) => (
                <div {...props} className={styles.thumb}/>
            )}
            />
        </div>
            </div>

    </>
  );
};
