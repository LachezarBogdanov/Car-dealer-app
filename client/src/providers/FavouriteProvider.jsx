import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { FavouriteContext } from "../contexts/FavouriteContext";


export default function FavouriteProvider({
    children,
}) {
    const { _id } = useAuth();
    
    const [favouriteItems, setFavouriteItems] = useState([]);

    useEffect(() => {
        if(_id) {
            const savedFavourites = sessionStorage.getItem(`favourites_${_id}`);

            setFavouriteItems(savedFavourites ? JSON.parse(savedFavourites) : []);
        } else {
            setFavouriteItems([]);
        }
    }, [_id]);

    const addToFavourite = (car) => {
        setFavouriteItems((prevFavouriteItems) => {
            const updatedFavourites = [...prevFavouriteItems, car];
            sessionStorage.setItem(`favourites_${_id}`, JSON.stringify(updatedFavourites));
            return updatedFavourites;
        })
    };

    const removeFavourite = (index) => {
        setFavouriteItems((prevFavourites) => {
            const updatedFavourites = prevFavourites.filter((_, i) => i !== index);
            sessionStorage.setItem(`favourites_${_id}`, JSON.stringify(updatedFavourites));
            return updatedFavourites;
        })
    }

    return (
        <FavouriteContext.Provider value={{favouriteItems, addToFavourite, removeFavourite}}>
            {children}
        </FavouriteContext.Provider>
    );
}
