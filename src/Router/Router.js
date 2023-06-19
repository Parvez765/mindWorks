import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Contact from "../Pages/HomePage/Contact/Contact";
import TestimonialPage from "../Pages/TestimonialPage/TestimonialPage";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <HomePage/>
            },
            {
                path: "/contact", element: <Contact/>
            },
            {
                path: "/testimonial", element: <TestimonialPage/>
            }
        ]
    }
])