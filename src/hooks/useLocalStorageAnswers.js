import { useState } from 'react';

export const useLocalStorageAnswers = (key, initValue) => {
    const [userAnswers, setUserAnswers] = useState(() => {
        const isAnswers = localStorage.getItem(key);
        if (isAnswers) {
            const answers = JSON.parse(isAnswers);
            return answers
        }
        else {
            localStorage.removeItem(key)
        }
        return initValue
    });


    const setLocalStorageAnswers = (value) => {
        if (value) {
            const copy = [...userAnswers];
            const keyToUpdate = Object.keys(value)[0];

            const existingIndex = copy.findIndex((answer) => answer[keyToUpdate]);
            existingIndex !== -1 ? copy[existingIndex] = value : copy.push(value);

            setUserAnswers(copy);
            localStorage.setItem(key, JSON.stringify(copy));
        }
        else{
            setUserAnswers([])
            localStorage.removeItem(key)
        }

    }

    return [userAnswers, setLocalStorageAnswers]
}