import { useContext } from 'react';
import styles from './Compartment.module.css'
import { CreateContext } from '../../contexts/CreateContext';
import { useNavigate } from 'react-router';

export default function Compartment() {
    const { setData, compartment } = useContext(CreateContext);
    const navigate = useNavigate();

    const handleSelect = (choosenCompartment) => {
        setData(prev => ({ ...prev, compartment: choosenCompartment }));
        navigate('/create');
    }

    return (
        <ul className={styles.compartmentUl}>
                    <li className={styles.compartmentLi} onClick={() => handleSelect('Седан')}>
                        <input className={styles.compartmentInput} readOnly checked={compartment === 'Седан'} name='compartmentId' type="radio" id="compartmentId_1" />
                        <label htmlFor="compartmentId_1">Седан</label>
                    </li>
                    <li className={styles.compartmentLi} onClick={() => handleSelect('Хечбек')}>
                        <input className={styles.compartmentInput} readOnly checked={compartment === 'Хечбек'} name='compartmentId' type="radio" id="compartmentId_2" />
                        <label htmlFor="compartmentId_2">Хечбек</label>
                    </li>
                    <li className={styles.compartmentLi} onClick={() => handleSelect('Комби')}>
                        <input className={styles.compartmentInput} readOnly checked={compartment === 'Комби'} name='compartmentId' type="radio" id="compartmentId_3" />
                        <label htmlFor="compartmentId_3">Комби</label>
                    </li>
                    <li className={styles.compartmentLi} onClick={() => handleSelect('Купе')}>
                        <input className={styles.compartmentInput} readOnly checked={compartment === 'Купе'} name='compartmentId' type="radio" id="compartmentId_4" />
                        <label htmlFor="compartmentId_4">Купе</label>
                    </li>
                    <li className={styles.compartmentLi} onClick={() => handleSelect('Кабрио')}>
                        <input className={styles.compartmentInput} readOnly checked={compartment === 'Кабрио'} name='compartmentId' type="radio" id="compartmentId_5" />
                        <label htmlFor="compartmentId_5">Кабрио</label>
                    </li>
                    <li className={styles.compartmentLi} onClick={() => handleSelect('Джип')}>
                        <input className={styles.compartmentInput} readOnly checked={compartment === 'Джип'} name='compartmentId' type="radio" id="compartmentId_6" />
                        <label htmlFor="compartmentId_6">Джип</label>
                    </li>
                    <li className={styles.compartmentLi} onClick={() => handleSelect('Пикап')}>
                        <input className={styles.compartmentInput} readOnly checked={compartment === 'Пикап'} name='compartmentId' type="radio" id="compartmentId_7" />
                        <label htmlFor="compartmentId_7">Пикап</label>
                    </li>
                    <li className={styles.compartmentLi} onClick={() => handleSelect('Ван')}>
                        <input className={styles.compartmentInput} readOnly checked={compartment === 'Ван'} name='compartmentId' type="radio" id="compartmentId_8" />
                        <label htmlFor="compartmentId_8">Ван</label>
                    </li>
                </ul>
    );
}
