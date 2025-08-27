import { useContext, useState } from 'react';
import styles from './Create.module.css'
import { Link, useNavigate } from 'react-router';
import { CreateContext } from '../../contexts/CreateContext';
import { useCreateCar } from '../../api/carApi';

export default function Create() {
  const [images, setImages] = useState([null, null, null, null, null]);
  const { create } = useCreateCar();
  const navigate = useNavigate();

  const { 
    setData,
    resetData,
    condition,
    model,
    modifications,
    compartment,
    price,
    gears,
    fuelType,
    power,
    cubature,
    year,
    mileage,
    doorCount,
    color,
    city,
    description
  } = useContext(CreateContext);

  const createHandler = async (data) => {
      const carData = data;

      await create(carData);

      resetData();

      navigate('/');
  }

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    if(file) {
      const newImages = [...images];
      newImages[index] = URL.createObjectURL(file);
      setImages(newImages);
      
    }
  }

  const handleModificationChange = (e) => {
    const value = e.target.value;
    
    setData(prev => ({...prev, modifications: value}));
  }

  const handlePriceChange = (e) => {
    const value = e.target.value;

    setData(prev => ({ ...prev, price: value }));
  }

  const handlePowerChange = (e) => {
    const value = e.target.value;

    setData(prev => ({...prev, power: value}));
  }

  const handleCubatureChange = (e) => {
    const value = e.target.value;

    setData(prev => ({...prev, cubature: value}));
  }

  const handleMileageChange = (e) => {
    const value = e.target.value;

    setData(prev => ({...prev, mileage: value}));
  }

  const handleCityChange = (e) => {
    const value = e.target.value;

    setData(prev => ({...prev, city: value}));
  }

  const handleDescriptionChange = (e) => {
    const value = e.target.value;

    setData(prev => ({...prev, description: value}));
  }

    return (
        <>
  <div className={styles["upload-wrapper"]}>
        <h3>Качете снимки</h3>
        <div className={styles["info-box"]}>
          ℹ️ Изберете до 5 снимки
        </div>
        <div className={styles["image-grid"]}>
          {[...Array(5)].map((_, i) => (
            <label key={i} className={styles["image-box"]}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(i, e)}
                hidden
              />
              {images[i] ? (
                <img src={images[i]} alt={`upload-${i}`} className={styles["preview-image"]} />
              ) : (
                <span className={styles["placeholder"]}>{i + 1}</span>
              )}
            </label>
          ))}
        </div>
      </div>
  <ul className={styles["options"]}>
    <li>
      <Link to={'/condition'}>
        Състояние*:
        <span className={styles["static"]}>{condition || 'Изберете'}</span>
      </Link>
    </li>
    <li>
      <Link to={'/model'}>
        Марка, Модел*:
        <span className={styles["static"]}>{model || 'Изберете'}</span>
      </Link>
    </li>
    <li>
      <div>
        Модификация*:
        <input
          type="text"
          name="Modify"
          className={styles["input-modify"]}
          maxLength={15}
          placeholder="Пример: 2.2, CDI"
          onChange={(e) => handleModificationChange(e)}
          defaultValue={modifications || ''}
        />
      </div>
    </li>
    <li>
      <Link to={'/compartment'}>
        Купе*:
        <span className={styles["static"]}>{compartment || 'Изберете'}</span>
      </Link>
    </li>
    <li>
      <div>
        Цена*:
        <input
          type="number"
          name="price"
          min={0}
          className={styles["input-modify"]}
          onChange={(e) => handlePriceChange(e)}
          defaultValue={price || ''}
        />
      </div>
    </li>
    <li>
      <Link to={'/gears'}>
        Скорости*:
        <span className={styles["static"]}>{gears || 'Изберете'}</span>
      </Link>
    </li>
    <li>
      <Link to={'/fuel'}>
        Гориво*:
        <span className={styles["static"]}>{fuelType || 'Изберете'}</span>
      </Link>
    </li>
    <li>
      <div>
        Мощност*:
        <input
          type="text"
          name="horse-powers"
          className={styles["input-modify"]}
          placeholder="Мощност ]}к.с."
          onChange={(e) => handlePowerChange(e)}
          defaultValue={power || ''}
        />
      </div>
    </li>
    <li>
      <div>
        Кубатура*:
        <input
          type="number"
          name="cubature"
          className={styles["input-modify"]}
          placeholder="2000"
          onChange={(e) => handleCubatureChange(e)}
          defaultValue={cubature || ''}
          min={0}
        />
      </div>
    </li>
    <li>
      <Link to={'/year'}>
        Година*:
        <span className={styles["static"]}>{year || 'Изберете'}</span>
      </Link>
    </li>
    <li>
      <div>
        Пробег*:
        <input
          type="number"
          name="mileage"
          className={styles["input-modify"]}
          placeholder="km"
          onChange={(e) => handleMileageChange(e)}
          defaultValue={mileage || ''}
          min={0}
        />
      </div>
    </li>
    <li>
      <Link to={'/doors'}>
        Брой врати*:
        <span className={styles["static"]}>{doorCount || 'Изберете'}</span>
      </Link>
    </li>
    <li>
      <Link to={'/color'}>
        Цвят*:
        <span className={styles["static"]}>{color || 'Изберете'}</span>
      </Link>
    </li>
    <li>
      <div>
        Град, село*:
        <input
          type="text"
          name="city"
          className={styles["input-modify"]}
          placeholder="Самоков"
          onChange={(e) => handleCityChange(e)}
          defaultValue={city || ''}
        />
      </div>
    </li>
    <li>
      <textarea
        name="description"
        id="description"
        className={styles["descriptionText"]}
        placeholder='Описание'
        onChange={(e) => handleDescriptionChange(e)}
        defaultValue={description || ''}
      />
    </li>
    <button className={styles["publish-btn"]} onClick={() => createHandler({
      condition,
      model,
      modifications,
      compartment,
      price,
      gears,
      fuelType,
      power,
      cubature,
      year,
      mileage,
      doorCount,
      color,
      city,
      description
    })}>Публикувай</button>
  </ul>
</>

    );
}
