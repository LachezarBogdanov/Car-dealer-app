import { useState } from 'react';
import { Range } from 'react-range';
import styles from '../PowerRangeModal/PowerRangeModal.module.css';

const STEP = 1;
const min = 0;
const max = 454;

export default function PowerRangeModal({
    onCLose,
}) {
    const [values, setValues] = useState([0, 454]);
  return (
    <>
        <div className={styles.powerOverlay} onClick={onCLose}>
        <div className={styles.powerWrapper} onClick={(e) => e.stopPropagation()}>
            <div className={styles.powerHead}>
                <i className="fa-solid fa-arrow-left" onClick={onCLose}></i>
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
