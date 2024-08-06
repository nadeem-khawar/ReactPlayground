import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.css';

const browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello World</div>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={browserRouter} />
    </React.StrictMode>,
);
