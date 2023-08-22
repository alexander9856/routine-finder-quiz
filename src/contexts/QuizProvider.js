import { createContext } from 'react';
import { useLocalStorageAnswers } from '../hooks/useLocalStorageAnswers'
import { useLocalStorageWishlist } from '../hooks/useLocalStorageWishlist';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [userAnswers, setUserAnswers] = useLocalStorageAnswers('userAnswers', []);
    const [userWishlist, setUserWishlist] = useLocalStorageWishlist('userWishlist', []);

    const contextValues = {
        userAnswers,
        setUserAnswers,
        userWishlist,
        setUserWishlist
    };

    return (
        <QuizContext.Provider value={contextValues}>
            {children}
        </QuizContext.Provider>
    );
};
