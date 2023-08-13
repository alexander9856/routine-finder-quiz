import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from './pages/Home'
import { QuizRoot } from './components/QuizRoot'
import { Quiz } from './pages/Quiz'
import { Results, loader } from "./pages/Results";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        // errorElement: 
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'quiz/:id',
                element: <QuizRoot />,
                children: [
                    {
                        index: true,
                        element: <Quiz />,
                    },
                ]
            },
            {
                path: 'quiz/results',
                element: <Results />,
                loader
            },
        ],
    },
]);
