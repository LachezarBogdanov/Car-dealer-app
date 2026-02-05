import { useState } from 'react';
import styles from '../PriceRangeModal/PriceRangeModal.module.css';
import { Range } from 'react-range';

const STEP = 500;
const min = 0;
const max = 50000;

export default function PriceRangeModal({
    onClose,
}) {
    const [values, setValues] = useState([0, 50000]);
    
  return (
    <>
        <div className={styles.priceOverlay} onClick={onClose}>
        <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.priceHead}>
                <i className="fa-solid fa-arrow-left" onClick={onClose}></i>
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
