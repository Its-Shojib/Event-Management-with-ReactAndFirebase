import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Layout/Error";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from "../Pages/Register";
import About from './../Pages/About';
import Contact from './../Pages/Contact';
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";
import Services from './../Pages/Services';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
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
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/services/:id",
                element: <PrivateRoute><Services></Services></PrivateRoute>,
                loader: ()=> fetch('/data.json')
            },
        ]
    },
]);

export default router;