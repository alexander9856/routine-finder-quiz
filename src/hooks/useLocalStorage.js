import { useState } from 'react';

export const useLocalStorage = (key, initValue) => {
    const [state, setState] = useState(() => {
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


    const setLocalStorageState = (value) => {
        if (value) {
            const copy = [...state];
            const keyToUpdate = Object.keys(value)[0];

            const existingIndex = copy.findIndex((answer) => answer[keyToUpdate]);
            existingIndex !== -1 ? copy[existingIndex] = value : copy.push(value);

            setState(copy);
            localStorage.setItem(key, JSON.stringify(copy));
        }
        else{
            setState([])
            localStorage.removeItem(key)
        }

    }

    return [state, setLocalStorageState]
}