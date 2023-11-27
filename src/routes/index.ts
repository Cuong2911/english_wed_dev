import { DefaultLayout, NoLayout } from '../modules/layouts';

import Home from '../modules/Home';
import { Login, Signup } from '../modules/Auth';
import Learning from '../modules/Learning';
import Exam from '../modules/Exam';
import Game from '../modules/Game';
import About from '../modules/About';

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
    {
        path: ROUTES.learning,
        component: Learning,
        layout: DefaultLayout,        
    },
    {
        path: ROUTES.exam,
        component: Exam,
        layout: DefaultLayout,        
    },
    {
        path: ROUTES.game,
        component: Game,
        layout: DefaultLayout,        
    },
    {
        path: ROUTES.about,
        component: About,
        layout: DefaultLayout,        
    },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };