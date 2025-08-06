import { useContext } from 'react';
import styles from './Year.module.css'
import { CreateContext } from '../../contexts/CreateContext';
import { useNavigate } from 'react-router';

export default function Year() {
    const { year, setData } = useContext(CreateContext);
    const navigate = useNavigate();

    const handleSelect = (choosen) => {
        setData(prev => ({ ...prev, year: choosen }));
        navigate('/create');
    }

    return (
        <ul className={styles.yearUl}>
            <li className={styles.yearLi} onClick={() => handleSelect('2025')}>
                <input className={styles.yearInput} readOnly checked={year === '2025'} name='gearsId' type="radio" id="yearId_1" />
                <label htmlFor="yearId_1">2025</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2024')}>
                <input className={styles.yearInput} readOnly checked={year === '2024'} name='gearsId' type="radio" id="yearId_2" />
                <label htmlFor="yearId_2">2024</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2023')}>
                <input className={styles.yearInput} readOnly checked={year === '2023'} name='gearsId' type="radio" id="yearId_3" />
                <label htmlFor="yearId_3">2023</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2022')}>
                <input className={styles.yearInput} readOnly checked={year === '2022'} name='gearsId' type="radio" id="yearId_4" />
                <label htmlFor="yearId_4">2022</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2021')}>
                <input className={styles.yearInput} readOnly checked={year === '2021'} name='gearsId' type="radio" id="yearId_5" />
                <label htmlFor="yearId_5">2021</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2020')}>
                <input className={styles.yearInput} readOnly checked={year === '2020'} name='gearsId' type="radio" id="yearId_6" />
                <label htmlFor="yearId_6">2020</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2019')}>
                <input className={styles.yearInput} readOnly checked={year === '2019'} name='gearsId' type="radio" id="yearId_7" />
                <label htmlFor="yearId_7">2019</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2018')}>
                <input className={styles.yearInput} readOnly checked={year === '2018'} name='gearsId' type="radio" id="yearId_8" />
                <label htmlFor="yearId_8">2018</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2017')}>
                <input className={styles.yearInput} readOnly checked={year === '2017'} name='gearsId' type="radio" id="yearId_9" />
                <label htmlFor="yearId_9">2017</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2016')}>
                <input className={styles.yearInput} readOnly checked={year === '2016'} name='gearsId' type="radio" id="yearId_10" />
                <label htmlFor="yearId_10">2016</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2015')}>
                <input className={styles.yearInput} readOnly checked={year === '2015'} name='gearsId' type="radio" id="yearId_11" />
                <label htmlFor="yearId_11">2015</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2014')}>
                <input className={styles.yearInput} readOnly checked={year === '2014'} name='gearsId' type="radio" id="yearId_12" />
                <label htmlFor="yearId_12">2014</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2013')}>
                <input className={styles.yearInput} readOnly checked={year === '2013'} name='gearsId' type="radio" id="yearId_13" />
                <label htmlFor="yearId_13">2013</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2012')}>
                <input className={styles.yearInput} readOnly checked={year === '2012'} name='gearsId' type="radio" id="yearId_14" />
                <label htmlFor="yearId_14">2012</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2011')}>
                <input className={styles.yearInput} readOnly checked={year === '2011'} name='gearsId' type="radio" id="yearId_15" />
                <label htmlFor="yearId_15">2011</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2010')}>
                <input className={styles.yearInput} readOnly checked={year === '2010'} name='gearsId' type="radio" id="yearId_16" />
                <label htmlFor="yearId_16">2010</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2009')}>
                <input className={styles.yearInput} readOnly checked={year === '2009'} name='gearsId' type="radio" id="yearId_17" />
                <label htmlFor="yearId_17">2009</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2008')}>
                <input className={styles.yearInput} readOnly checked={year === '2008'} name='gearsId' type="radio" id="yearId_18" />
                <label htmlFor="yearId_18">2008</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2007')}>
                <input className={styles.yearInput} readOnly checked={year === '2007'} name='gearsId' type="radio" id="yearId_19" />
                <label htmlFor="yearId_19">2007</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2006')}>
                <input className={styles.yearInput} readOnly checked={year === '2006'} name='gearsId' type="radio" id="yearId_20" />
                <label htmlFor="yearId_20">2006</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2005')}>
                <input className={styles.yearInput} readOnly checked={year === '2005'} name='gearsId' type="radio" id="yearId_21" />
                <label htmlFor="yearId_21">2005</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2004')}>
                <input className={styles.yearInput} readOnly checked={year === '2004'} name='gearsId' type="radio" id="yearId_22" />
                <label htmlFor="yearId_22">2004</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2003')}>
                <input className={styles.yearInput} readOnly checked={year === '2003'} name='gearsId' type="radio" id="yearId_23" />
                <label htmlFor="yearId_23">2003</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2002')}>
                <input className={styles.yearInput} readOnly checked={year === '2002'} name='gearsId' type="radio" id="yearId_24" />
                <label htmlFor="yearId_24">2002</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2001')}>
                <input className={styles.yearInput} readOnly checked={year === '2001'} name='gearsId' type="radio" id="yearId_25" />
                <label htmlFor="yearId_25">2001</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('2000')}>
                <input className={styles.yearInput} readOnly checked={year === '2000'} name='gearsId' type="radio" id="yearId_26" />
                <label htmlFor="yearId_26">2000</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1999')}>
                <input className={styles.yearInput} readOnly checked={year === '1999'} name='gearsId' type="radio" id="yearId_27" />
                <label htmlFor="yearId_27">1999</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1998')}>
                <input className={styles.yearInput} readOnly checked={year === '1998'} name='gearsId' type="radio" id="yearId_28" />
                <label htmlFor="yearId_28">1998</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1997')}>
                <input className={styles.yearInput} readOnly checked={year === '1997'} name='gearsId' type="radio" id="yearId_29" />
                <label htmlFor="yearId_29">1997</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1996')}>
                <input className={styles.yearInput} readOnly checked={year === '1996'} name='gearsId' type="radio" id="yearId_30" />
                <label htmlFor="yearId_30">1996</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1995')}>
                <input className={styles.yearInput} readOnly checked={year === '1995'} name='gearsId' type="radio" id="yearId_31" />
                <label htmlFor="yearId_31">1995</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1994')}>
                <input className={styles.yearInput} readOnly checked={year === '1994'} name='gearsId' type="radio" id="yearId_32" />
                <label htmlFor="yearId_32">1994</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1993')}>
                <input className={styles.yearInput} readOnly checked={year === '1993'} name='gearsId' type="radio" id="yearId_33" />
                <label htmlFor="yearId_33">1993</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1992')}>
                <input className={styles.yearInput} readOnly checked={year === '1992'} name='gearsId' type="radio" id="yearId_34" />
                <label htmlFor="yearId_34">1992</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1991')}>
                <input className={styles.yearInput} readOnly checked={year === '1991'} name='gearsId' type="radio" id="yearId_35" />
                <label htmlFor="yearId_35">1991</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1990')}>
                <input className={styles.yearInput} readOnly checked={year === '1990'} name='gearsId' type="radio" id="yearId_36" />
                <label htmlFor="yearId_36">1990</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1989')}>
                <input className={styles.yearInput} readOnly checked={year === '1989'} name='gearsId' type="radio" id="yearId_37" />
                <label htmlFor="yearId_37">1989</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1988')}>
                <input className={styles.yearInput} readOnly checked={year === '1988'} name='gearsId' type="radio" id="yearId_38" />
                <label htmlFor="yearId_38">1988</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1987')}>
                <input className={styles.yearInput} readOnly checked={year === '1987'} name='gearsId' type="radio" id="yearId_39" />
                <label htmlFor="yearId_39">1987</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1986')}>
                <input className={styles.yearInput} readOnly checked={year === '1986'} name='gearsId' type="radio" id="yearId_40" />
                <label htmlFor="yearId_40">1986</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1985')}>
                <input className={styles.yearInput} readOnly checked={year === '1985'} name='gearsId' type="radio" id="yearId_41" />
                <label htmlFor="yearId_41">1985</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1984')}>
                <input className={styles.yearInput} readOnly checked={year === '1984'} name='gearsId' type="radio" id="yearId_42" />
                <label htmlFor="yearId_42">1984</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1983')}>
                <input className={styles.yearInput} readOnly checked={year === '1983'} name='gearsId' type="radio" id="yearId_43" />
                <label htmlFor="yearId_43">1983</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1982')}>
                <input className={styles.yearInput} readOnly checked={year === '1982'} name='gearsId' type="radio" id="yearId_44" />
                <label htmlFor="yearId_44">1982</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1981')}>
                <input className={styles.yearInput} readOnly checked={year === '1981'} name='gearsId' type="radio" id="yearId_45" />
                <label htmlFor="yearId_45">1981</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1980')}>
                <input className={styles.yearInput} readOnly checked={year === '1980'} name='gearsId' type="radio" id="yearId_46" />
                <label htmlFor="yearId_46">1980</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1979')}>
                <input className={styles.yearInput} readOnly checked={year === '1979'} name='gearsId' type="radio" id="yearId_47" />
                <label htmlFor="yearId_47">1979</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1978')}>
                <input className={styles.yearInput} readOnly checked={year === '1978'} name='gearsId' type="radio" id="yearId_48" />
                <label htmlFor="yearId_48">1978</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1977')}>
                <input className={styles.yearInput} readOnly checked={year === '1977'} name='gearsId' type="radio" id="yearId_49" />
                <label htmlFor="yearId_49">1977</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1976')}>
                <input className={styles.yearInput} readOnly checked={year === '1976'} name='gearsId' type="radio" id="yearId_50" />
                <label htmlFor="yearId_50">1976</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1975')}>
                <input className={styles.yearInput} readOnly checked={year === '1975'} name='gearsId' type="radio" id="yearId_51" />
                <label htmlFor="yearId_51">1975</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1974')}>
                <input className={styles.yearInput} readOnly checked={year === '1974'} name='gearsId' type="radio" id="yearId_52" />
                <label htmlFor="yearId_52">1974</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1973')}>
                <input className={styles.yearInput} readOnly checked={year === '1973'} name='gearsId' type="radio" id="yearId_53" />
                <label htmlFor="yearId_53">1973</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1972')}>
                <input className={styles.yearInput} readOnly checked={year === '1972'} name='gearsId' type="radio" id="yearId_54" />
                <label htmlFor="yearId_54">1972</label>
            </li>
            <li className={styles.yearLi} onClick={() => handleSelect('1971')}>
                <input className={styles.yearInput} readOnly checked={year === '1971'} name='gearsId' type="radio" id="yearId_55" />
                <label htmlFor="yearId_55">1971</label>
            </li>
        </ul>
    );
}
