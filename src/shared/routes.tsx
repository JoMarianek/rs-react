import App from '@/views/Mainpage';
import PageNotFound from '@/views/404NotFound';

export const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <PageNotFound />,
    },
    {
        path: "*",
        element: <PageNotFound />
    }
];
