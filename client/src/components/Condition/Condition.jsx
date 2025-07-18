import { useContext } from 'react';
import styles from './Condition.module.css'
import { CreateContext } from '../../contexts/CreateContext';
import { useNavigate } from 'react-router';

export default function Condition() {
    const { setData, condition } = useContext(CreateContext);
    const navigate = useNavigate();
        
    const handleSelect = (choosen) => {
        setData(prev => ({ ...prev, condition: choosen }));
        navigate('/create');
    }

    return (
        <ul className={styles.conditionUl}>
            <li className={styles.conditionLi} onClick={() => handleSelect('В добро състояние')}>
                <input className={styles.styled} readOnly checked={condition === 'В добро състояние'} name='conditionId' type="radio" id="conditionId_1" />
                <label htmlFor="conditionId_1">В добро състояние</label>
            </li>
            <li className={styles.conditionLi} onClick={() => handleSelect('Повредени/Ударени')}>
                <input className={styles.styled} readOnly checked={condition === 'Повредени/Ударени'} name='conditionId' type="radio" id="conditionId_2" />
                <label htmlFor="conditionId_2">Повредени/Ударени</label>
            </li>
            <li className={styles.conditionLi} onClick={() => handleSelect('Цели автомобили за части')}>
                <input className={styles.styled} readOnly checked={condition === 'Цели автомобили за части'} name='conditionId' type="radio" id="conditionId_3" />
                <label htmlFor="conditionId_3">Цели автомобили за части</label>
            </li>
        </ul>
    );
}
