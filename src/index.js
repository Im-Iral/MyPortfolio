import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';

import {createBrowserRouter, RouterProvider,} from 'react-router-dom';



const router = createBrowserRouter([
  //Home page route
  {
    path: "/",
    element: <App />,
  },
  //About page route
  {
    path: "About",
    element: <About />,
  },
  //Contact page route
  {
    path: "Contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


