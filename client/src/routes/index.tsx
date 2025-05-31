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
import CompanyProfile from '../components/companyProfile/companyProfile';
import IncomeStatement from '../components/incomeStatement/incomeStatement';
import Design from '../pages/design';
import BalanceSheet from '../components/balanceSheet/balanceSheet';
import CashFlowStatement from '../components/cashFlowStatement/cashFlowStatement';

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
          element: <Design />
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
          element: <Company  />,
          children:[
            {
              path:"company-profile",
              element: <CompanyProfile  /> 
            },
            {
              path:"income-statement",
              element: <IncomeStatement  />
            },
            {
              path:"balance-sheet",
              element: <BalanceSheet  /> 
            },
            {
              path:"cashflow-statement",
              element: <CashFlowStatement  />
            }
          ]
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
