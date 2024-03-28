import { createBrowserRouter } from "react-router-dom";

import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";


export const appRouter = createBrowserRouter([
   
    {
        path: '/',
        element: <Signup />
    },
    {
        path: '/signin',
        element: <Signin />
    }
  
])