import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import PageNotFound from './views/404NotFound.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorBoundary } from './components/errorboundary.tsx'

const router = createBrowserRouter([{
        path: "/",
        element: <App/>,
        errorElement: <PageNotFound />
    },
    {
        path: "/404",
        element: <PageNotFound />
    },
    {
        path: "*",
        element: <PageNotFound />
    }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
        <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
)
