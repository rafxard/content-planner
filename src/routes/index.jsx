import GuestLayout from "../layouts/Guest";
import MainLayout from "../layouts/Main";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { renderRoutes } from "./generate-routes";
import Calendar from "../pages/Calendar";
import Pricing from "../pages/Pricing";

export const routes = [
    {
        layout: GuestLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                component: Login,
                path: '/login',
            },
            {
                name: 'register',
                title: 'Register page',
                component: Register,
                path: '/register',
            }
        ]
    },
    {
        layout: MainLayout,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: Home,
                path: '/'
            },
            {
                name: 'calendar-timeline',
                title: 'Calendar Timeline',
                component: Calendar,
                path: '/content-planner/calendar-timeline'
            },
            {
                name: 'pricing',
                title: 'Pricing',
                component: Pricing,
                path: '/pricing'
            },
        ]
    }
]

export const Routes = renderRoutes(routes)