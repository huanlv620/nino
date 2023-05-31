import { HeaderOnly } from '~/Layout';
import { Home, Following, Profile, Search, Upload } from '~/pages';

const PublicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
        layout: null,
    },
    {
        path: '/search',
        component: Search,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
