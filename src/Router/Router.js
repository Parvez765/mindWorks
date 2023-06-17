import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Contact from "../Pages/HomePage/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <HomePage/>
            },
            {
                path: "/contact", element: <Contact/>
            }
        ]
    }
])