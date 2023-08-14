import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [userAnswers, setUserAnswers] = useLocalStorage('answers', []);

    const contextValues = {
        userAnswers,
        setUserAnswers,
    };

    return (
        <QuizContext.Provider value={contextValues}>
            {children}
        </QuizContext.Provider>
    );
};
