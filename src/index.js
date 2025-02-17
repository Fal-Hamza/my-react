import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import  Home  from "./pages/home";
import  HTML  from "./pages/html";
import  Css  from "./pages/css";
import  Javascript  from "./pages/javascript";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    errorElement: <h1>Opsssssss......</h1>
  },

  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },

  {
    path: "/javascript",
    element: <Javascript />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

