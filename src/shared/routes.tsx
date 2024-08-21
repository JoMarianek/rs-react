import App from '@/views/Mainpage';
import PageNotFound from '@/views/404NotFound';
import { ErrorBoundary } from '@/components/Errorboundary';

export const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorBoundary />,
    },
    {
        path: "*",
        element: <PageNotFound />
    }
];
