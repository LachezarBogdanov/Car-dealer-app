import { useContext, useEffect, useMemo, useState } from 'react';
import { Range } from 'react-range';
import styles from '../PowerRangeModal/PowerRangeModal.module.css';
import { SearchContext } from '../../contexts/SearchContext';

const STEP = 1;
const min = 0;
const max = 454;

export default function PowerRangeModal({
    onCLose,
}) {
    const { setData, powerMin, powerMax } = useContext(SearchContext);

       const rangeValues = useMemo(() => {
      const hasMin = powerMin != null && powerMin > min;
      const hasMax = powerMax != null && powerMax < max;
    
      if (hasMin && hasMax) {
        return [powerMin, powerMax]; 
      }
    
      if (hasMin) {
        return [powerMin, max]; 
      }
    
      if (hasMax) {
        return [min, powerMax]; 
      }
    
      return [min, max]; 
    }, [powerMin, powerMax]);

    const [values, setValues] = useState(rangeValues);

    const isPowerChanged =
        values[0] > min  ||
        values[1] < max ;

      useEffect(() => {
            setValues(rangeValues);
        }, [rangeValues]);

    const handlePowerConfirm = () => {
        setData(prev => (
            {
                ...prev,
                powerMin: values[0],
                powerMax: values[1]
            }
        ));

        onCLose();
    }
    
    const handleClearPower = () => {
        setData(prev => (
            {
                ...prev,
                powerMin: null,
                powerMax: null
            }
        ));

        onCLose();
    }

  return (
    <>
        <div className={styles.powerOverlay} onClick={onCLose}>
        <div className={styles.powerWrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.powerHead}>
                <i className="fa-solid fa-arrow-left" onClick={onCLose}></i>
                {isPowerChanged && (
                    <span className={styles.confirm} onClick={handlePowerConfirm}>
                        Потвърди
                    </span>
                )}
                {
                    (powerMin && powerMin !== 0 || powerMax && powerMax !== 454 )
                    && (
                        <span className={styles.clear} onClick={handleClearPower}>
                            Clear
                        </span>
                    )
                }
                <h1>Мощност</h1>
            </div>
            <div className={styles.powerLabels}>
                <span>{values[0]} к.с.</span>
                <span>{values[1]}+ к.с.</span>
            </div>

        <Range
            step={STEP}
            min={min}
            max={max}
            values={values}
            onChange={setValues}
            renderTrack={({props, children}) => (
                <div {...props} className={styles.powerTrack}>
                    {children}
                </div>
            )}
            renderThumb={({props}) => (
                <div {...props} className={styles.powerThumb}/>
            )}
            />
        </div>
            </div>
    </>
  );
};
