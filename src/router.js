import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from './pages/Home'
import { QuizRoot } from './components/QuizRoot'
import { Quiz } from './pages/Quiz'
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
        ],
    },
]);
