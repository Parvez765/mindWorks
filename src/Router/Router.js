import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/HomePage/HomePage";
import Contact from "../Pages/HomePage/Contact/Contact";
import TestimonialPage from "../Pages/TestimonialPage/TestimonialPage";
import About from "../Pages/About/About";
import LeanTransformationPage from "../Pages/LeanTransformationPage/LeanTransformationPage";
import Seed from "../Pages/Seed/Seed";
import Consulting from "../Component/Consulting/Consulting";
import MSI from "../Component/MSI/MSI";
import Training from "../Component/Training/Training";



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
            },
            {
                path: "/whoweare", element: <About/>
            },
            // {
            //     path : "/leantransformation", element: <LeanTransformationPage/>
            // }
            {
                path : '/seed', element: <Seed/>
            },
            {
                path: "/consulting", element: <Consulting/>
            },
            {
                path: "/msi", element: <MSI/>
            },
            {
                path: "/training", element : <Training/>
            }
        ]
    }
])