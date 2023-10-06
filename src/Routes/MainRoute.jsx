import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Layout/Error";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from "../Pages/Register";
import About from './../Pages/About';
import Contact from './../Pages/Contact';
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/about",
                element: <PrivateRoute> <About></About></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute> <Contact></Contact></PrivateRoute>
            },
        ]
    },
]);

export default router;