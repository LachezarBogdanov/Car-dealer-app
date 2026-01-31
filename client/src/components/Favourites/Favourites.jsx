import { useContext } from 'react';
import styles from '../Favourites/Favourites.module.css'
import { FavouriteContext } from '../../contexts/FavouriteContext';
import FavouriteCar from './FavouriteCar/FavouriteCar';

export default function Favourites() {
    const { favouriteItems } = useContext(FavouriteContext);
    
    return (
        <>
        <div className={styles.favouriteWrapp}>
            {favouriteItems.length > 0
                ? (favouriteItems.map((car, index) => (
                    <FavouriteCar key={car._id} car={car} index={index}/>
                )))
                : <h1>No favourite cars yet!</h1>
            }
        </div>
        </>
    );
}
