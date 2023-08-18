import { useState } from 'react';

export const useLocalStorageWishlist = (key, initValue) => {
    const [userWishlist, setUserWishlist] = useState(() => {
        const isWishlist = localStorage.getItem(key);
        if (isWishlist) {
            const wishlist = JSON.parse(isWishlist);
            return wishlist
        }
        else {
            localStorage.removeItem(key)
        }
        return initValue
    });


    const setLocalStorageWishlist = (value) => {
        let copy = [...userWishlist];
        if (value) {
            copy = copy.includes(value) ? copy.filter(item => item !== value) : [...copy, value];
            setUserWishlist(copy);
            localStorage.setItem(key, JSON.stringify(copy));
        }
        else {
            setUserWishlist([]);
            localStorage.removeItem(key);
        }
    }

    return [userWishlist, setLocalStorageWishlist]
}