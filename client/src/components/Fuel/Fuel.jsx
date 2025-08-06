import { useContext } from 'react';
import styles from './Fuel.module.css'
import { CreateContext } from '../../contexts/CreateContext';
import { useNavigate } from 'react-router';

export default function Fuel() {
    const { fuelType, setData } = useContext(CreateContext);
    const navigate = useNavigate();

    const handleSelect = (choose) => {
        setData(prev => ({...prev, fuelType: choose}));
        navigate('/create');
    }

    return (
         <ul className={styles.fuelUl}>
                            <li className={styles.fuelLi} onClick={() => handleSelect('Бензин')}>
                                <input className={styles.fuelInput} readOnly checked={fuelType === 'Бензин'} name='gearsId' type="radio" id="fuelId_1" />
                                <label htmlFor="fuelId_1">Бензин</label>
                            </li>
                            <li className={styles.fuelLi} onClick={() => handleSelect('Дизел')}>
                                <input className={styles.fuelInput} readOnly checked={fuelType === 'Дизел'} name='gearsId' type="radio" id="fuelId_2" />
                                <label htmlFor="fuelId_2">Дизел</label>
                            </li>
                            <li className={styles.fuelLi} onClick={() => handleSelect('Газ/Бензин')}>
                                <input className={styles.fuelInput} readOnly checked={fuelType === 'Газ/Бензин'} name='gearsId' type="radio" id="fuelId_3" />
                                <label htmlFor="fuelId_3">Газ/Бензин</label>
                            </li>
                            <li className={styles.fuelLi} onClick={() => handleSelect('Метан/Бензин')}>
                                <input className={styles.fuelInput} readOnly checked={fuelType === 'Метан/Бензин'} name='gearsId' type="radio" id="fuelId_4" />
                                <label htmlFor="fuelId_4">Метан/Бензин</label>
                            </li>
                            <li className={styles.fuelLi} onClick={() => handleSelect('Хибрид')}>
                                <input className={styles.fuelInput} readOnly checked={fuelType === 'Хибрид'} name='gearsId' type="radio" id="fuelId_5" />
                                <label htmlFor="fuelId_5">Хибрид</label>
                            </li>
                            <li className={styles.fuelLi} onClick={() => handleSelect('Хибрид')}>
                                <input className={styles.fuelInput} readOnly checked={fuelType === 'Хибрид'} name='gearsId' type="radio" id="fuelId_6" />
                                <label htmlFor="fuelId_6">Хибрид</label>
                            </li>
                            <li className={styles.fuelLi} onClick={() => handleSelect('Електричество')}>
                                <input className={styles.fuelInput} readOnly checked={fuelType === 'Електричество'} name='gearsId' type="radio" id="fuelId_7" />
                                <label htmlFor="fuelId_7">Електричество</label>
                            </li>
                        </ul>
    );
}
