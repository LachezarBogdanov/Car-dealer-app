import { useState } from "react";
import { Range } from "react-range";

import styles from '../YearSearchModal/YearSearchModal.module.css';

const STEP = 1;
const min = 1970;
const max = 2026;

export default function YearSearchModal({
    onClose,
}) {
    const [values, setValues] = useState([1970, 2026]);

  return (
    <>
    <div className={styles.yearOverlay} onClick={onClose}>
        <div className={styles.yearWrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.yearHead}>
                <i className="fa-solid fa-arrow-left" onClick={onClose}></i>
                <h1>Цена</h1>
            </div>
            <div className={styles.yearLabels}>
                <span>{values[0]} г.</span>
                <span>{values[1]} г.</span>
            </div>

        <Range
            step={STEP}
            min={min}
            max={max}
            values={values}
            onChange={setValues}
            renderTrack={({props, children}) => (
                <div {...props} className={styles.yearTrack}>
                    {children}
                </div>
            )}
            renderThumb={({props}) => (
                <div {...props} className={styles.yearThumb}/>
            )}
            />
        </div>
            </div>
    </>
  );
};
