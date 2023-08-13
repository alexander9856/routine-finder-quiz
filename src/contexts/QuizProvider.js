import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [answers, setAnswers] = useLocalStorage('answers', []);

    const contextValues = {
        answers,
        setAnswers
    };

    return (
        <QuizContext.Provider value={contextValues}>
            {children}
        </QuizContext.Provider>
    );
};
