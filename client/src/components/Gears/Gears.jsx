import { useContext } from 'react';
import styles from './Gears.module.css'
import { CreateContext } from '../../contexts/CreateContext';
import { useNavigate } from 'react-router';

export default function Gears() {
    const { setData, gears } = useContext(CreateContext);
    const navigate = useNavigate();

    const handleSelect = (choose) => {
        setData(prev => ({ ...prev, gears: choose }));
        navigate('/create');
    }
    
    return (
        <ul className={styles.gearsUl}>
                    <li className={styles.gearsLi} onClick={() => handleSelect('Ръчни')}>
                        <input className={styles.gearsInput} readOnly checked={gears === 'Ръчни'} name='gearsId' type="radio" id="gearsId_1" />
                        <label htmlFor="gearsId_1">Ръчни</label>
                    </li>
                    <li className={styles.gearsLi} onClick={() => handleSelect('Автоматични')}>
                        <input className={styles.gearsInput} readOnly checked={gears === 'Автоматични'} name='gearsId' type="radio" id="gearsId_2" />
                        <label htmlFor="gearsId_2">Автоматични</label>
                    </li>
                </ul>
    );
}
