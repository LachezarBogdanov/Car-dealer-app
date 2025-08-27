import { useContext } from 'react';
import styles from './Doors.module.css'
import { CreateContext } from '../../contexts/CreateContext';
import { useNavigate } from 'react-router';

export default function Doors() {
    const { doorCount, setData } = useContext(CreateContext);
    const navigate = useNavigate();

    const handleSelect = (choosen) => {
        setData(prev => ({...prev, doorCount: choosen}));

        navigate('/create')
    }
    return (
        <ul className={styles.doorsUl}>
            <li className={styles.doorsLi} onClick={() => handleSelect('2/3')}>
                <input className={styles.doorsInput} readOnly checked={doorCount === '2/3'} name='gearsId' type="radio" id="doorsId_1" />
                <label htmlFor="doorsId_1">2/3</label>
            </li>
            <li className={styles.doorsLi} onClick={() => handleSelect('4/5')}>
                <input className={styles.doorsInput} readOnly checked={doorCount === '4/5'} name='gearsId' type="radio" id="doorsId_2" />
                <label htmlFor="doorsId_2">4/5</label>
            </li>
        </ul>
    );
}
