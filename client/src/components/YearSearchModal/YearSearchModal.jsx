import { useContext, useEffect, useMemo, useState } from "react";
import { Range } from "react-range";

import styles from '../YearSearchModal/YearSearchModal.module.css';
import { SearchContext } from "../../contexts/SearchContext";

const STEP = 1;
const min = 1970;
const max = 2026;

export default function YearSearchModal({
    onClose,
}) {
    const { setData, yearMin, yearMax } = useContext(SearchContext);

        const rangeValues = useMemo(() => {
      const hasMin = yearMin != null && yearMin > min;
      const hasMax = yearMax != null && yearMax < max;
    
      if (hasMin && hasMax) {
        return [yearMin, yearMax]; 
      }
    
      if (hasMin) {
        return [yearMin, max]; 
      }
    
      if (hasMax) {
        return [min, yearMax]; 
      }
    
      return [min, max]; 
    }, [yearMin, yearMax]);

    const [values, setValues] = useState(rangeValues);


     useEffect(() => {
            setValues(rangeValues);
        }, [rangeValues]);

    const handleComfirmBtn = () => {
        setData(prev => (
            {
                ...prev,
                yearMin: values[0],
                yearMax: values[1]
            }
        ));

        onClose();
    }

    const handleClearBtn = () => {
        setData(prev => (
            {
                ...prev,
                yearMin: null,
                yearMax: null
            }
        ));

        onClose();
    }
    

  return (
    <>
    <div className={styles.yearOverlay} onClick={onClose}>
        <div className={styles.yearWrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.yearHead}>
                <i className="fa-solid fa-arrow-left" onClick={onClose}></i>
                <span className={styles.confirm} onClick={handleComfirmBtn}>
                    Потвърди
                </span>
                {
                    (yearMin && yearMin !== 1970 || yearMax && yearMax !== 2026 )
                    && (
                        <span className={styles.clear} onClick={handleClearBtn}>
                            Clear
                        </span>
                    )
                }
                <h1>Година</h1>
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
