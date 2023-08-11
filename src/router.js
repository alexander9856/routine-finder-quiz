import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from './pages/Home'
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
        ],
    },
]);
