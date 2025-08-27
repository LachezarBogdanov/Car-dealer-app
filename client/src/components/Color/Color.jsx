import { useContext } from 'react';
import styles from './Color.module.css'
import { CreateContext } from '../../contexts/CreateContext';
import { useNavigate } from 'react-router';

export default function Color() {
    const { color, setData } = useContext(CreateContext);
    const navigate = useNavigate();

    const handleSelect = (selected) => {
        setData(prev => ({...prev, color: selected}));

        navigate('/create');
    }
    return (
        <ul className={styles.colorUl}>
            <li className={styles.colorLi} onClick={() => handleSelect('Бежов')}>
                <input className={styles.colorInput} readOnly checked={color === 'Бежов'} name='gearsId' type="radio" id="colorId_1" />
                <label htmlFor="colorId_1">Бежов</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Бордо')}>
                <input className={styles.colorInput} readOnly checked={color === 'Бордо'} name='gearsId' type="radio" id="colorId_2" />
                <label htmlFor="colorId_2">Бордо</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Бронзов')}>
                <input className={styles.colorInput} readOnly checked={color === 'Бронзов'} name='gearsId' type="radio" id="colorId_3" />
                <label htmlFor="colorId_3">Бронзов</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Бял')}>
                <input className={styles.colorInput} readOnly checked={color === 'Бял'} name='gearsId' type="radio" id="colorId_4" />
                <label htmlFor="colorId_4">Бял</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Виолетов')}>
                <input className={styles.colorInput} readOnly checked={color === 'Виолетов'} name='gearsId' type="radio" id="colorId_5" />
                <label htmlFor="colorId_5">Виолетов</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Жълт')}>
                <input className={styles.colorInput} readOnly checked={color === 'Жълт'} name='gearsId' type="radio" id="colorId_6" />
                <label htmlFor="colorId_6">Жълт</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Зелен')}>
                <input className={styles.colorInput} readOnly checked={color === 'Зелен'} name='gearsId' type="radio" id="colorId_7" />
                <label htmlFor="colorId_7">Зелен</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Златен')}>
                <input className={styles.colorInput} readOnly checked={color === 'Златен'} name='gearsId' type="radio" id="colorId_8" />
                <label htmlFor="colorId_8">Златен</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Кафяв')}>
                <input className={styles.colorInput} readOnly checked={color === 'Кафяв'} name='gearsId' type="radio" id="colorId_9" />
                <label htmlFor="colorId_9">Кафяв</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Оранжев')}>
                <input className={styles.colorInput} readOnly checked={color === 'Оранжев'} name='gearsId' type="radio" id="colorId_10" />
                <label htmlFor="colorId_10">Оранжев</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Сив')}>
                <input className={styles.colorInput} readOnly checked={color === 'Сив'} name='gearsId' type="radio" id="colorId_11" />
                <label htmlFor="colorId_11">Сив</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Син')}>
                <input className={styles.colorInput} readOnly checked={color === 'Син'} name='gearsId' type="radio" id="colorId_12" />
                <label htmlFor="colorId_12">Син</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Сребърен')}>
                <input className={styles.colorInput} readOnly checked={color === 'Сребърен'} name='gearsId' type="radio" id="colorId_13" />
                <label htmlFor="colorId_13">Сребърен</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Червен')}>
                <input className={styles.colorInput} readOnly checked={color === 'Червен'} name='gearsId' type="radio" id="colorId_14" />
                <label htmlFor="colorId_14">Червен</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Черен')}>
                <input className={styles.colorInput} readOnly checked={color === 'Черен'} name='gearsId' type="radio" id="colorId_15" />
                <label htmlFor="colorId_15">Черен</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Лилав')}>
                <input className={styles.colorInput} readOnly checked={color === 'Лилав'} name='gearsId' type="radio" id="colorId_16" />
                <label htmlFor="colorId_16">Лилав</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Охра')}>
                <input className={styles.colorInput} readOnly checked={color === 'Охра'} name='gearsId' type="radio" id="colorId_17" />
                <label htmlFor="colorId_17">Охра</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Перла')}>
                <input className={styles.colorInput} readOnly checked={color === 'Перла'} name='gearsId' type="radio" id="colorId_18" />
                <label htmlFor="colorId_18">Перла</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Розов')}>
                <input className={styles.colorInput} readOnly checked={color === 'Розов'} name='gearsId' type="radio" id="colorId_19" />
                <label htmlFor="colorId_19">Розов</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Хамелеон')}>
                <input className={styles.colorInput} readOnly checked={color === 'Хамелеон'} name='gearsId' type="radio" id="colorId_20" />
                <label htmlFor="colorId_20">Хамелеон</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Светло зелен')}>
                <input className={styles.colorInput} readOnly checked={color === 'Светло зелен'} name='gearsId' type="radio" id="colorId_21" />
                <label htmlFor="colorId_21">Светло зелен</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Светло сив')}>
                <input className={styles.colorInput} readOnly checked={color === 'Светло сив'} name='gearsId' type="radio" id="colorId_22" />
                <label htmlFor="colorId_22">Светло сив</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Светло син')}>
                <input className={styles.colorInput} readOnly checked={color === 'Светло син'} name='gearsId' type="radio" id="colorId_23" />
                <label htmlFor="colorId_23">Светло син</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Тъмно зелен')}>
                <input className={styles.colorInput} readOnly checked={color === 'Тъмно зелен'} name='gearsId' type="radio" id="colorId_24" />
                <label htmlFor="colorId_24">Тъмно зелен</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Тъмно сив')}>
                <input className={styles.colorInput} readOnly checked={color === 'Тъмно сив'} name='gearsId' type="radio" id="colorId_25" />
                <label htmlFor="colorId_25">Тъмно сив</label>
            </li>
            <li className={styles.colorLi} onClick={() => handleSelect('Тъмно син')}>
                <input className={styles.colorInput} readOnly checked={color === 'Тъмно син'} name='gearsId' type="radio" id="colorId_26" />
                <label htmlFor="colorId_26">Тъмно син</label>
            </li>
        </ul>
    );
}
