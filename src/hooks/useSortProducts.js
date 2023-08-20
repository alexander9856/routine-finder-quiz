import { useEffect, useState } from 'react';
export const useSortProducts = (filteredData, userWishlist) => {
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        const sorted = filteredData.sort((a, b) => {
            if (userWishlist) {
                const aIndex = userWishlist.indexOf(a.title);
                const bIndex = userWishlist.indexOf(b.title);
                if (aIndex !== -1 && bIndex !== -1) {
                    return aIndex - bIndex;
                }
                else if (aIndex !== -1) {
                    return -1;
                }
                else if (bIndex !== -1) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            return 0;
        });

        setSortedProducts(sorted);
    }, []);

    return sortedProducts;
}