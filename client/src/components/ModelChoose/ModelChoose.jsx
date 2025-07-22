import { useContext } from 'react';
import styles from './ModelChoose.module.css'
import { CreateContext } from '../../contexts/CreateContext';
import { useNavigate } from 'react-router';

export default function ModelChoose() {
    const { setData, model } = useContext(CreateContext);
    const navigate = useNavigate();

    const handleSelect = (choosenModel) => {
        setData(prev => ({...prev, model: choosenModel}));
        navigate('/create');
    }

    return (
        <ul className={styles.modelUl}>
            <div className={styles.classA}>A</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Acura')}>
                <input className={styles.inputModel} readOnly checked={model === 'Acura'} type="radio" name="modelId" id="modelId_1" />
                <label htmlFor="modelId1">Acura</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Aixam')}>
                <input className={styles.inputModel} readOnly checked={model === 'Aixam'} type="radio" name="modelId" id="modelId_2" />
                <label htmlFor="modelId1">Aixam</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Alfa Romeo')}>
                <input className={styles.inputModel} readOnly checked={model === 'Alfa Romeo'} type="radio" name="modelId" id="modelId_3" />
                <label htmlFor="modelId1">Alfa Romeo</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Alpina')}>
                <input className={styles.inputModel} readOnly checked={model === 'Alpina'} type="radio" name="modelId" id="modelId_4" />
                <label htmlFor="modelId1">Alpina</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Aro')}>
                <input className={styles.inputModel} readOnly checked={model === 'Aro'} type="radio" name="modelId" id="modelId_5" />
                <label htmlFor="modelId1">Aro</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Asia Motors')}>
                <input className={styles.inputModel} readOnly checked={model === 'Asia Motors'} type="radio" name="modelId" id="modelId_6" />
                <label htmlFor="modelId1">Asia Motors</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Aston Martin')}>
                <input className={styles.inputModel} readOnly checked={model === 'Aston Martin'} type="radio" name="modelId" id="modelId_7" />
                <label htmlFor="modelId1">Aston Martin</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Audi')}>
                <input className={styles.inputModel} readOnly checked={model === 'Audi'} type="radio" name="modelId" id="modelId_8" />
                <label htmlFor="modelId1">Audi</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Austin')}>
                <input className={styles.inputModel} readOnly checked={model === 'Austin'} type="radio" name="modelId" id="modelId_9" />
                <label htmlFor="modelId1">Austin</label>
            </li>
            <div className={styles.classA}>B</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Barkas')}>
                <input className={styles.inputModel} readOnly checked={model === 'Barkas'} type="radio" name="modelId" id="modelId_10" />
                <label htmlFor="modelId1">Barkas</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('BAW')}>
                <input className={styles.inputModel} readOnly checked={model === 'BAW'} type="radio" name="modelId" id="modelId_11" />
                <label htmlFor="modelId1">BAW</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Bedford')}>
                <input className={styles.inputModel} readOnly checked={model === 'Bedford'} type="radio" name="modelId" id="modelId_12" />
                <label htmlFor="modelId1">Bedford</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Bentley')}>
                <input className={styles.inputModel} readOnly checked={model === 'Bentley'} type="radio" name="modelId" id="modelId_13" />
                <label htmlFor="modelId1">Bentley</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('BMW')}>
                <input className={styles.inputModel} readOnly checked={model === 'BMW'} type="radio" name="modelId" id="modelId_14" />
                <label htmlFor="modelId1">BMW</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Borgward')}>
                <input className={styles.inputModel} readOnly checked={model === 'Borgward'} type="radio" name="modelId" id="modelId_15" />
                <label htmlFor="modelId1">Borgward</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Bova')}>
                <input className={styles.inputModel} readOnly checked={model === 'Bova'} type="radio" name="modelId" id="modelId_16" />
                <label htmlFor="modelId1">Bova</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Brilliance')}>
                <input className={styles.inputModel} readOnly checked={model === 'Brilliance'} type="radio" name="modelId" id="modelId_17" />
                <label htmlFor="modelId1">Brilliance</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Bugatti')}>
                <input className={styles.inputModel} readOnly checked={model === 'Bugatti'} type="radio" name="modelId" id="modelId_18" />
                <label htmlFor="modelId1">Bugatti</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Buick')}>
                <input className={styles.inputModel} readOnly checked={model === 'Buick'} type="radio" name="modelId" id="modelId_19" />
                <label htmlFor="modelId1">Buick</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('BYD')}>
                <input className={styles.inputModel} readOnly checked={model === 'BYD'} type="radio" name="modelId" id="modelId_20" />
                <label htmlFor="modelId1">BYD</label>
            </li>
            <div className={styles.classA}>C</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Cadillac')}>
                <input className={styles.inputModel} readOnly checked={model === 'Cadillac'} type="radio" name="modelId" id="modelId_21" />
                <label htmlFor="modelId1">Cadillac</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Carthago')}>
                <input className={styles.inputModel} readOnly checked={model === 'Carthago'} type="radio" name="modelId" id="modelId_22" />
                <label htmlFor="modelId1">Carthago</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Cenntro')}>
                <input className={styles.inputModel} readOnly checked={model === 'Cenntro'} type="radio" name="modelId" id="modelId_23" />
                <label htmlFor="modelId1">Cenntro</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Chevrolet')}>
                <input className={styles.inputModel} readOnly checked={model === 'Chevrolet'} type="radio" name="modelId" id="modelId_24" />
                <label htmlFor="modelId1">Chevrolet</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Chrysler')}>
                <input className={styles.inputModel} readOnly checked={model === 'Chrysler'} type="radio" name="modelId" id="modelId_25" />
                <label htmlFor="modelId1">Chrysler</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Citroen')}>
                <input className={styles.inputModel} readOnly checked={model === 'Citroen'} type="radio" name="modelId" id="modelId_26" />
                <label htmlFor="modelId1">Citroen</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Corvette')}>
                <input className={styles.inputModel} readOnly checked={model === 'Corvette'} type="radio" name="modelId" id="modelId_27" />
                <label htmlFor="modelId1">Corvette</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Cupra')}>
                <input className={styles.inputModel} readOnly checked={model === 'Cupra'} type="radio" name="modelId" id="modelId_28" />
                <label htmlFor="modelId1">Cupra</label>
            </li>
            <div className={styles.classA}>D</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Dacia')}>
                <input className={styles.inputModel} readOnly checked={model === 'Dacia'} type="radio" name="modelId" id="modelId_29" />
                <label htmlFor="modelId1">Dacia</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Daewoo')}>
                <input className={styles.inputModel} readOnly checked={model === 'Daewoo'} type="radio" name="modelId" id="modelId_30" />
                <label htmlFor="modelId1">Daewoo</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('DAF')}>
                <input className={styles.inputModel} readOnly checked={model === 'DAF'} type="radio" name="modelId" id="modelId_31" />
                <label htmlFor="modelId1">DAF</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Daihatsu')}>
                <input className={styles.inputModel} readOnly checked={model === 'Daihatsu'} type="radio" name="modelId" id="modelId_32" />
                <label htmlFor="modelId1">Daihatsu</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Datsun')}>
                <input className={styles.inputModel} readOnly checked={model === 'Datsun'} type="radio" name="modelId" id="modelId_33" />
                <label htmlFor="modelId1">Datsun</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('DFSK')}>
                <input className={styles.inputModel} readOnly checked={model === 'DFSK'} type="radio" name="modelId" id="modelId_34" />
                <label htmlFor="modelId1">DFSK</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Dodge')}>
                <input className={styles.inputModel} readOnly checked={model === 'Dodge'} type="radio" name="modelId" id="modelId_35" />
                <label htmlFor="modelId1">Dodge</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('DR')}>
                <input className={styles.inputModel} readOnly checked={model === 'DR'} type="radio" name="modelId" id="modelId_36" />
                <label htmlFor="modelId1">DR</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('DS')}>
                <input className={styles.inputModel} readOnly checked={model === 'DS'} type="radio" name="modelId" id="modelId_37" />
                <label htmlFor="modelId1">DS</label>
            </li>
            <div className={styles.classA}>E</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Eos')}>
                <input className={styles.inputModel} readOnly checked={model === 'Eos'} type="radio" name="modelId" id="modelId_38" />
                <label htmlFor="modelId1">Eos</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Excalibur')}>
                <input className={styles.inputModel} readOnly checked={model === 'Excalibur'} type="radio" name="modelId" id="modelId_39" />
                <label htmlFor="modelId1">Excalibur</label>
            </li>
            <div className={styles.classA}>F</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Ferrari')}>
                <input className={styles.inputModel} readOnly checked={model === 'Ferrari'} type="radio" name="modelId" id="modelId_40" />
                <label htmlFor="modelId1">Ferrari</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Fiat')}>
                <input className={styles.inputModel} readOnly checked={model === 'Fiat'} type="radio" name="modelId" id="modelId_41" />
                <label htmlFor="modelId1">Fiat</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Ford')}>
                <input className={styles.inputModel} readOnly checked={model === 'Ford'} type="radio" name="modelId" id="modelId_42" />
                <label htmlFor="modelId1">Ford</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Foton')}>
                <input className={styles.inputModel} readOnly checked={model === 'Foton'} type="radio" name="modelId" id="modelId_43" />
                <label htmlFor="modelId1">Foton</label>
            </li>
            <div className={styles.classA}>G</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Gac Gonow')}>
                <input className={styles.inputModel} readOnly checked={model === 'Gac Gonow'} type="radio" name="modelId" id="modelId_44" />
                <label htmlFor="modelId1">Gac Gonow</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('GAZ')}>
                <input className={styles.inputModel} readOnly checked={model === 'GAZ'} type="radio" name="modelId" id="modelId_45" />
                <label htmlFor="modelId1">GAZ</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('GEO')}>
                <input className={styles.inputModel} readOnly checked={model === 'GEO'} type="radio" name="modelId" id="modelId_46" />
                <label htmlFor="modelId1">GEO</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Gillet')}>
                <input className={styles.inputModel} readOnly checked={model === 'Gillet'} type="radio" name="modelId" id="modelId_47" />
                <label htmlFor="modelId1">Gillet</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('GMC')}>
                <input className={styles.inputModel} readOnly checked={model === 'GMC'} type="radio" name="modelId" id="modelId_48" />
                <label htmlFor="modelId1">GMC</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Great wall')}>
                <input className={styles.inputModel} readOnly checked={model === 'Great wall'} type="radio" name="modelId" id="modelId_49" />
                <label htmlFor="modelId1">Great wall</label>
            </li>
            <div className={styles.classA}>H</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Haval')}>
                <input className={styles.inputModel} readOnly checked={model === 'Haval'} type="radio" name="modelId" id="modelId_50" />
                <label htmlFor="modelId1">Haval</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('HIGER')}>
                <input className={styles.inputModel} readOnly checked={model === 'HIGER'} type="radio" name="modelId" id="modelId_51" />
                <label htmlFor="modelId1">HIGER</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Honda')}>
                <input className={styles.inputModel} readOnly checked={model === 'Honda'} type="radio" name="modelId" id="modelId_52" />
                <label htmlFor="modelId1">Honda</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Humber')}>
                <input className={styles.inputModel} readOnly checked={model === 'Humber'} type="radio" name="modelId" id="modelId_53" />
                <label htmlFor="modelId1">Humber</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Hummer')}>
                <input className={styles.inputModel} readOnly checked={model === 'Hummer'} type="radio" name="modelId" id="modelId_54" />
                <label htmlFor="modelId1">Hummer</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Hyundai')}>
                <input className={styles.inputModel} readOnly checked={model === 'Hyundai'} type="radio" name="modelId" id="modelId_55" />
                <label htmlFor="modelId1">Hyundai</label>
            </li>
            <div className={styles.classA}>I</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Ikarus')}>
                <input className={styles.inputModel} readOnly checked={model === 'Ikarus'} type="radio" name="modelId" id="modelId_56" />
                <label htmlFor="modelId1">Ikarus</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Infiniti')}>
                <input className={styles.inputModel} readOnly checked={model === 'Infiniti'} type="radio" name="modelId" id="modelId_57" />
                <label htmlFor="modelId1">Infiniti</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Isuzu')}>
                <input className={styles.inputModel} readOnly checked={model === 'Isuzu'} type="radio" name="modelId" id="modelId_58" />
                <label htmlFor="modelId1">Isuzu</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Iveco')}>
                <input className={styles.inputModel} readOnly checked={model === 'Iveco'} type="radio" name="modelId" id="modelId_59" />
                <label htmlFor="modelId1">Iveco</label>
            </li>
            <div className={styles.classA}>J</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Jaguar')}>
                <input className={styles.inputModel} readOnly checked={model === 'Jaguar'} type="radio" name="modelId" id="modelId_60" />
                <label htmlFor="modelId1">Jaguar</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Jeep')}>
                <input className={styles.inputModel} readOnly checked={model === 'Jeep'} type="radio" name="modelId" id="modelId_61" />
                <label htmlFor="modelId1">Jeep</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Jmev')}>
                <input className={styles.inputModel} readOnly checked={model === 'Jmev'} type="radio" name="modelId" id="modelId_62" />
                <label htmlFor="modelId1">Jmev</label>
            </li>
            <div className={styles.classA}>K</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Kia')}>
                <input className={styles.inputModel} readOnly checked={model === 'Kia'} type="radio" name="modelId" id="modelId_63" />
                <label htmlFor="modelId1">Kia</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Koenigsegg')}>
                <input className={styles.inputModel} readOnly checked={model === 'Koenigsegg'} type="radio" name="modelId" id="modelId_64" />
                <label htmlFor="modelId1">Koenigsegg</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Kratumant')}>
                <input className={styles.inputModel} readOnly checked={model === 'Kratumant'} type="radio" name="modelId" id="modelId_65" />
                <label htmlFor="modelId1">Kratumant</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Ktm')}>
                <input className={styles.inputModel} readOnly checked={model === 'Ktm'} type="radio" name="modelId" id="modelId_66" />
                <label htmlFor="modelId1">Ktm</label>
            </li>
            <div className={styles.classA}>L</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Lada')}>
                <input className={styles.inputModel} readOnly checked={model === 'Lada'} type="radio" name="modelId" id="modelId_67" />
                <label htmlFor="modelId1">Lada</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Lamborghini')}>
                <input className={styles.inputModel} readOnly checked={model === 'Lamborghini'} type="radio" name="modelId" id="modelId_68" />
                <label htmlFor="modelId1">Lamborghini</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Lancia')}>
                <input className={styles.inputModel} readOnly checked={model === 'Lancia'} type="radio" name="modelId" id="modelId_69" />
                <label htmlFor="modelId1">Lancia</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Land Rover')}>
                <input className={styles.inputModel} readOnly checked={model === 'Land Rover'} type="radio" name="modelId" id="modelId_70" />
                <label htmlFor="modelId1">Land Rover</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Landwind')}>
                <input className={styles.inputModel} readOnly checked={model === 'Landwind'} type="radio" name="modelId" id="modelId_71" />
                <label htmlFor="modelId1">Landwind</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Latvia')}>
                <input className={styles.inputModel} readOnly checked={model === 'Latvia'} type="radio" name="modelId" id="modelId_72" />
                <label htmlFor="modelId1">Latvia</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('LDV')}>
                <input className={styles.inputModel} readOnly checked={model === 'LDV'} type="radio" name="modelId" id="modelId_73" />
                <label htmlFor="modelId1">LDV</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Lexus')}>
                <input className={styles.inputModel} readOnly checked={model === 'Lexus'} type="radio" name="modelId" id="modelId_74" />
                <label htmlFor="modelId1">Lexus</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Ligier')}>
                <input className={styles.inputModel} readOnly checked={model === 'Ligier'} type="radio" name="modelId" id="modelId_75" />
                <label htmlFor="modelId1">Ligier</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Lincoln')}>
                <input className={styles.inputModel} readOnly checked={model === 'Lincoln'} type="radio" name="modelId" id="modelId_76" />
                <label htmlFor="modelId1">Lincoln</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Lotus')}>
                <input className={styles.inputModel} readOnly checked={model === 'Lotus'} type="radio" name="modelId" id="modelId_77" />
                <label htmlFor="modelId1">Lotus</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Lynk and Co')}>
                <input className={styles.inputModel} readOnly checked={model === 'Lynk and Co'} type="radio" name="modelId" id="modelId_78" />
                <label htmlFor="modelId1">Lynk and Co</label>
            </li>
            <div className={styles.classA}>M</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Mahindra')}>
                <input className={styles.inputModel} readOnly checked={model === 'Mahindra'} type="radio" name="modelId" id="modelId_79" />
                <label htmlFor="modelId1">Mahindra</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('MAN')}>
                <input className={styles.inputModel} readOnly checked={model === 'MAN'} type="radio" name="modelId" id="modelId_80" />
                <label htmlFor="modelId1">MAN</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Martin Motors')}>
                <input className={styles.inputModel} readOnly checked={model === 'Martin Motors'} type="radio" name="modelId" id="modelId_81" />
                <label htmlFor="modelId1">Martin Motors</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Maserati')}>
                <input className={styles.inputModel} readOnly checked={model === 'Maserati'} type="radio" name="modelId" id="modelId_82" />
                <label htmlFor="modelId1">Maserati</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Matra')}>
                <input className={styles.inputModel} readOnly checked={model === 'Matra'} type="radio" name="modelId" id="modelId_83" />
                <label htmlFor="modelId1">Matra</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Maybach')}>
                <input className={styles.inputModel} readOnly checked={model === 'Maybach'} type="radio" name="modelId" id="modelId_84" />
                <label htmlFor="modelId1">Maybach</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Mazda')}>
                <input className={styles.inputModel} readOnly checked={model === 'Mazda'} type="radio" name="modelId" id="modelId_85" />
                <label htmlFor="modelId1">Mazda</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('McLaren')}>
                <input className={styles.inputModel} readOnly checked={model === 'McLaren'} type="radio" name="modelId" id="modelId_86" />
                <label htmlFor="modelId1">McLaren</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Mercedes-Benz')}>
                <input className={styles.inputModel} readOnly checked={model === 'Mercedes-Benz'} type="radio" name="modelId" id="modelId_87" />
                <label htmlFor="modelId1">Mercedes-Benz</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('MG')}>
                <input className={styles.inputModel} readOnly checked={model === 'MG'} type="radio" name="modelId" id="modelId_88" />
                <label htmlFor="modelId1">MG</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Microcar')}>
                <input className={styles.inputModel} readOnly checked={model === 'Microcar'} type="radio" name="modelId" id="modelId_89" />
                <label htmlFor="modelId1">Microcar</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Mini')}>
                <input className={styles.inputModel} readOnly checked={model === 'Mini'} type="radio" name="modelId" id="modelId_90" />
                <label htmlFor="modelId1">Mini</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Mitsubishi')}>
                <input className={styles.inputModel} readOnly checked={model === 'Mitsubishi'} type="radio" name="modelId" id="modelId_91" />
                <label htmlFor="modelId1">Mitsubishi</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Morgan')}>
                <input className={styles.inputModel} readOnly checked={model === 'Morgan'} type="radio" name="modelId" id="modelId_92" />
                <label htmlFor="modelId1">Morgan</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Moskvich')}>
                <input className={styles.inputModel} readOnly checked={model === 'Moskvich'} type="radio" name="modelId" id="modelId_93" />
                <label htmlFor="modelId1">Moskvich</label>
            </li>
            <div className={styles.classA}>N</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Neoplan')}>
                <input className={styles.inputModel} readOnly checked={model === 'Neoplan'} type="radio" name="modelId" id="modelId_94" />
                <label htmlFor="modelId1">Neoplan</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Nissan')}>
                <input className={styles.inputModel} readOnly checked={model === 'Nissan'} type="radio" name="modelId" id="modelId_95" />
                <label htmlFor="modelId1">Nissan</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('NSU')}>
                <input className={styles.inputModel} readOnly checked={model === 'NSU'} type="radio" name="modelId" id="modelId_96" />
                <label htmlFor="modelId1">NSU</label>
            </li>
            <div className={styles.classA}>O</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Oldsmobile')}>
                <input className={styles.inputModel} readOnly checked={model === 'Oldsmobile'} type="radio" name="modelId" id="modelId_97" />
                <label htmlFor="modelId1">Oldsmobile</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Oltsit')}>
                <input className={styles.inputModel} readOnly checked={model === 'Oltsit'} type="radio" name="modelId" id="modelId_98" />
                <label htmlFor="modelId1">Oltsit</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Opel')}>
                <input className={styles.inputModel} readOnly checked={model === 'Opel'} type="radio" name="modelId" id="modelId_99" />
                <label htmlFor="modelId1">Opel</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Oxford')}>
                <input className={styles.inputModel} readOnly checked={model === 'Oxford'} type="radio" name="modelId" id="modelId_100" />
                <label htmlFor="modelId1">Oxford</label>
            </li>
            <div className={styles.classA}>P</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Peugeot')}>
                <input className={styles.inputModel} readOnly checked={model === 'Peugeot'} type="radio" name="modelId" id="modelId_101" />
                <label htmlFor="modelId1">Peugeot</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Piaggio')}>
                <input className={styles.inputModel} readOnly checked={model === 'Piaggio'} type="radio" name="modelId" id="modelId_102" />
                <label htmlFor="modelId1">Piaggio</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Plymouth')}>
                <input className={styles.inputModel} readOnly checked={model === 'Plymouth'} type="radio" name="modelId" id="modelId_103" />
                <label htmlFor="modelId1">Plymouth</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Polestar')}>
                <input className={styles.inputModel} readOnly checked={model === 'Polestar'} type="radio" name="modelId" id="modelId_104" />
                <label htmlFor="modelId1">Polestar</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Pontiac')}>
                <input className={styles.inputModel} readOnly checked={model === 'Pontiac'} type="radio" name="modelId" id="modelId_105" />
                <label htmlFor="modelId1">Pontiac</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Porsche')}>
                <input className={styles.inputModel} readOnly checked={model === 'Porsche'} type="radio" name="modelId" id="modelId_106" />
                <label htmlFor="modelId1">Porsche</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Proton')}>
                <input className={styles.inputModel} readOnly checked={model === 'Proton'} type="radio" name="modelId" id="modelId_107" />
                <label htmlFor="modelId1">Proton</label>
            </li>
            <div className={styles.classA}>R</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Range Rover')}>
                <input className={styles.inputModel} readOnly checked={model === 'Range Rover'} type="radio" name="modelId" id="modelId_108" />
                <label htmlFor="modelId1">Range Rover</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Renault')}>
                <input className={styles.inputModel} readOnly checked={model === 'Renault'} type="radio" name="modelId" id="modelId_109" />
                <label htmlFor="modelId1">Renault</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Rolls Royce')}>
                <input className={styles.inputModel} readOnly checked={model === 'Rolls Royce'} type="radio" name="modelId" id="modelId_110" />
                <label htmlFor="modelId1">Rolls Royce</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Rover')}>
                <input className={styles.inputModel} readOnly checked={model === 'Rover'} type="radio" name="modelId" id="modelId_111" />
                <label htmlFor="modelId1">Rover</label>
            </li>
            <div className={styles.classA}>S</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Saab')}>
                <input className={styles.inputModel} readOnly checked={model === 'Saab'} type="radio" name="modelId" id="modelId_112" />
                <label htmlFor="modelId1">Saab</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Samand')}>
                <input className={styles.inputModel} readOnly checked={model === 'Samand'} type="radio" name="modelId" id="modelId_113" />
                <label htmlFor="modelId1">Samand</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Santana')}>
                <input className={styles.inputModel} readOnly checked={model === 'Santana'} type="radio" name="modelId" id="modelId_114" />
                <label htmlFor="modelId1">Santana</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Scania')}>
                <input className={styles.inputModel} readOnly checked={model === 'Scania'} type="radio" name="modelId" id="modelId_115" />
                <label htmlFor="modelId1">Scania</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Scion')}>
                <input className={styles.inputModel} readOnly checked={model === 'Scion'} type="radio" name="modelId" id="modelId_116" />
                <label htmlFor="modelId1">Scion</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Seat')}>
                <input className={styles.inputModel} readOnly checked={model === 'Seat'} type="radio" name="modelId" id="modelId_117" />
                <label htmlFor="modelId1">Seat</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Setra')}>
                <input className={styles.inputModel} readOnly checked={model === 'Setra'} type="radio" name="modelId" id="modelId_118" />
                <label htmlFor="modelId1">Setra</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Shuanghuan')}>
                <input className={styles.inputModel} readOnly checked={model === 'Shuanghuan'} type="radio" name="modelId" id="modelId_119" />
                <label htmlFor="modelId1">Shuanghuan</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Simca')}>
                <input className={styles.inputModel} readOnly checked={model === 'Simca'} type="radio" name="modelId" id="modelId_120" />
                <label htmlFor="modelId1">Simca</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Skoda')}>
                <input className={styles.inputModel} readOnly checked={model === 'Skoda'} type="radio" name="modelId" id="modelId_121" />
                <label htmlFor="modelId1">Skoda</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Smart')}>
                <input className={styles.inputModel} readOnly checked={model === 'Smart'} type="radio" name="modelId" id="modelId_122" />
                <label htmlFor="modelId1">Smart</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Ssangyong')}>
                <input className={styles.inputModel} readOnly checked={model === 'Ssangyong'} type="radio" name="modelId" id="modelId_123" />
                <label htmlFor="modelId1">Ssangyong</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('STOEWER')}>
                <input className={styles.inputModel} readOnly checked={model === 'STOEWER'} type="radio" name="modelId" id="modelId_124" />
                <label htmlFor="modelId1">STOEWER</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Subaru')}>
                <input className={styles.inputModel} readOnly checked={model === 'Subaru'} type="radio" name="modelId" id="modelId_125" />
                <label htmlFor="modelId1">Subaru</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Suzuki')}>
                <input className={styles.inputModel} readOnly checked={model === 'Suzuki'} type="radio" name="modelId" id="modelId_126" />
                <label htmlFor="modelId1">Suzuki</label>
            </li>
            <div className={styles.classA}>T</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Talbot')}>
                <input className={styles.inputModel} readOnly checked={model === 'Talbot'} type="radio" name="modelId" id="modelId_127" />
                <label htmlFor="modelId1">Talbot</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Tata')}>
                <input className={styles.inputModel} readOnly checked={model === 'Tata'} type="radio" name="modelId" id="modelId_128" />
                <label htmlFor="modelId1">Tata</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Tempo')}>
                <input className={styles.inputModel} readOnly checked={model === 'Tempo'} type="radio" name="modelId" id="modelId_129" />
                <label htmlFor="modelId1">Tempo</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Temsa')}>
                <input className={styles.inputModel} readOnly checked={model === 'Temsa'} type="radio" name="modelId" id="modelId_130" />
                <label htmlFor="modelId1">Temsa</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Tesla')}>
                <input className={styles.inputModel} readOnly checked={model === 'Tesla'} type="radio" name="modelId" id="modelId_131" />
                <label htmlFor="modelId1">Tesla</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Toyota')}>
                <input className={styles.inputModel} readOnly checked={model === 'Toyota'} type="radio" name="modelId" id="modelId_132" />
                <label htmlFor="modelId1">Toyota</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Trabant')}>
                <input className={styles.inputModel} readOnly checked={model === 'Trabant'} type="radio" name="modelId" id="modelId_133" />
                <label htmlFor="modelId1">Trabant</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Triumph')}>
                <input className={styles.inputModel} readOnly checked={model === 'Triumph'} type="radio" name="modelId" id="modelId_134" />
                <label htmlFor="modelId1">Triumph</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('TVR')}>
                <input className={styles.inputModel} readOnly checked={model === 'TVR'} type="radio" name="modelId" id="modelId_135" />
                <label htmlFor="modelId1">TVR</label>
            </li>
            <div className={styles.classA}>U</div>
            <li className={styles.modelLi} onClick={() => handleSelect('UAZ')}>
                <input className={styles.inputModel} readOnly checked={model === 'UAZ'} type="radio" name="modelId" id="modelId_136" />
                <label htmlFor="modelId1">UAZ</label>
            </li>
            <div className={styles.classA}>V</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Van Hool')}>
                <input className={styles.inputModel} readOnly checked={model === 'Van Hool'} type="radio" name="modelId" id="modelId_137" />
                <label htmlFor="modelId1">Van Hool</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Vauxhall')}>
                <input className={styles.inputModel} readOnly checked={model === 'Vauxhall'} type="radio" name="modelId" id="modelId_138" />
                <label htmlFor="modelId1">Vauxhall</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Volga')}>
                <input className={styles.inputModel} readOnly checked={model === 'Volga'} type="radio" name="modelId" id="modelId_139" />
                <label htmlFor="modelId1">Volga</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Volvo')}>
                <input className={styles.inputModel} readOnly checked={model === 'Volvo'} type="radio" name="modelId" id="modelId_140" />
                <label htmlFor="modelId1">Volvo</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Vromos')}>
                <input className={styles.inputModel} readOnly checked={model === 'Vromos'} type="radio" name="modelId" id="modelId_141" />
                <label htmlFor="modelId1">Vromos</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('VW')}>
                <input className={styles.inputModel} readOnly checked={model === 'VW'} type="radio" name="modelId" id="modelId_142" />
                <label htmlFor="modelId1">VW</label>
            </li>
            <div className={styles.classA}>W</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Wartburg')}>
                <input className={styles.inputModel} readOnly checked={model === 'Wartburg'} type="radio" name="modelId" id="modelId_143" />
                <label htmlFor="modelId1">Wartburg</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Wiesmann')}>
                <input className={styles.inputModel} readOnly checked={model === 'Wiesmann'} type="radio" name="modelId" id="modelId_144" />
                <label htmlFor="modelId1">Wiesmann</label>
            </li>
            <div className={styles.classA}>Y</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Yogomo')}>
                <input className={styles.inputModel} readOnly checked={model === 'Yogomo'} type="radio" name="modelId" id="modelId_145" />
                <label htmlFor="modelId1">Yogomo</label>
            </li>
            <div className={styles.classA}>Z</div>
            <li className={styles.modelLi} onClick={() => handleSelect('Zastava')}>
                <input className={styles.inputModel} readOnly checked={model === 'Zastava'} type="radio" name="modelId" id="modelId_146" />
                <label htmlFor="modelId1">Zastava</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Zaz')}>
                <input className={styles.inputModel} readOnly checked={model === 'Zaz'} type="radio" name="modelId" id="modelId_147" />
                <label htmlFor="modelId1">Zaz</label>
            </li>
            <div className={styles.classA}>В</div>
            <li className={styles.modelLi} onClick={() => handleSelect('ВАЗ')}>
                <input className={styles.inputModel} readOnly checked={model === 'ВАЗ'} type="radio" name="modelId" id="modelId_148" />
                <label htmlFor="modelId1">ВАЗ</label>
            </li>
            <li className={styles.modelLi} onClick={() => handleSelect('Варшава')}>
                <input className={styles.inputModel} readOnly checked={model === 'Варшава'} type="radio" name="modelId" id="modelId_149" />
                <label htmlFor="modelId1">Варшава</label>
            </li>
            <div className={styles.classA}>С</div>
            <li className={styles.modelLi} onClick={() => handleSelect('София')}>
                <input className={styles.inputModel} readOnly checked={model === 'София'} type="radio" name="modelId" id="modelId_150" />
                <label htmlFor="modelId1">София</label>
            </li>
        </ul>
    );
}
