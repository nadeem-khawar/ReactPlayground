import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';
import Root from './routes/root';
import ErrorPage from './error-page';
import StateHookPage from './routes/statehook';
import EffectHookPage from './routes/effecthook';

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/statehook',
                element: <StateHookPage />,
            },
            {
                path: '/effecthook',
                element: <EffectHookPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={browserRouter} />
    </React.StrictMode>,
);
