import { DefaultLayout, NoLayout } from '../modules/layouts';

import Home from '../modules/Home';
import { Login, Signup } from '../modules/Auth';

import { ROUTES } from '../configs/routes';

const publicRoutes = [
    {
        path: ROUTES.home,
        component: Home,
        layout: DefaultLayout,        
    },
    {
        path: ROUTES.login,
        component: Login,
        layout: NoLayout,        
    },
    {
        path: ROUTES.signup,
        component: Signup,
        layout: NoLayout,        
    },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };