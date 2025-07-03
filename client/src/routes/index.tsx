import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/homePage/home';
import ForgotPassword from '../pages/authPages/forgetPassword';
import ResetPassword from '../pages/authPages/resetPassword';
import Signup from '../pages/authPages/signup';
import Login from '../pages/authPages/login'; 
import Search from '../pages/searchPage/search';
import Company from '../pages/companyPage/company';
import App from '../App';
import CompanyProfile from '../components/companyProfile/companyProfile';
import IncomeStatement from '../components/incomeStatement/incomeStatement';
import Design from '../pages/designPage/design';
import BalanceSheet from '../components/balanceSheet/balanceSheet';
import CashFlowStatement from '../components/cashFlowStatement/cashFlowStatement';
import Notfound from '../pages/notfoundPage/notfound';
import ProtectedRoutes from './protectedRoutes'; 
import IsConfirmedGuard from './isConfirmedGuard';


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
          path: "/design-guide",
          element: <ProtectedRoutes><Design /></ProtectedRoutes>
        },
        {
          path: "/forget-password",
          element: <ForgotPassword />
        },
        {

          path: "/reset-password",
          element: <IsConfirmedGuard><ResetPassword /></IsConfirmedGuard>
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
          element: <ProtectedRoutes><Search /></ProtectedRoutes>
        },
        {
          path: "/company/:ticker",
          element: <ProtectedRoutes><Company /></ProtectedRoutes>, 
          children:[
            {
              path:"company-profile",
              element: <CompanyProfile /> 
            },
            {
              path:"income-statement",
              element: <IncomeStatement />
            },
            {
              path:"balance-sheet",
              element: <BalanceSheet /> 
            },
            {
              path:"cashflow-statement",
              element: <CashFlowStatement />
            }
          ]
        }, 
        {
          path: "*",
          element: <Notfound />
        }
      ]
    }, 
  ]
);

export default router;
