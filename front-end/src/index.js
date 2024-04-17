import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// 1 -configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from "./routes/Home";
import Petshop from "./routes/Petshop";
import Cliente from "./routes/Cliente";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"petshop",
    element: <Petshop />,
  },
  {
    path:"cliente",
    element: <Cliente />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
