import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import ForgotPassword from '../pages/forgetPassword';
import ResetPassword from '../pages/resetPassword';
import Signup from '../pages/signup';
import Login from '../pages/login';
import Portfolio from '../pages/portfolio';
import Search from '../pages/search';
import Company from '../pages/company';
import App from '../App';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/forget-password",
          element: <ForgotPassword />
        },
        {
          path: "/reset-password/:token",
          element: <ResetPassword />
        },
        {
          path: "/signup",
          element: <Signup />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/company/:ticker",
          element: <Company  />
        },
        {
          path: "/portfolio",
          element: <Portfolio />
        },
        {
          path: "*",
          element: <div>Not Found</div>
        }
      ]
    }, 
  ]
);

export default router;
