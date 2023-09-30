import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Visited from "../Pages/Visited/Visited";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Authentication/Login/Login";
import Registration from "../Pages/Authentication/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";


const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path:'/visited',
                element: <PrivateRoute><Visited/></PrivateRoute>,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details/></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/registration',
                element: <Registration/>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard/></PrivateRoute>
            },
        ]
    }
])

export default myCreateRoute;