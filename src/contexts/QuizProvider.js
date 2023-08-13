import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const [answers, setAnswers] = useLocalStorage('answers', []);
    // const [products, setProducts] = useState([]);
    // console.log(answers)
    // console.log(products[3])
    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const res = await fetch('https://jeval.com.au/collections/hair-care/products.json?page=1');
    //             const data = await res.json();
    //             setProducts(data.products)
    //         }
    //         catch(err){
    //             console.log(err.message)
    //         }
    //     }
    //     getData()
    // }, [])

    const contextValues = {
        answers,
        setAnswers,
        // products
    };

    return (
        <QuizContext.Provider value={contextValues}>
            {children}
        </QuizContext.Provider>
    );
};
