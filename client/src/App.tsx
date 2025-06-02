import React from 'react';
import './index.css';    
import { Toaster } from 'react-hot-toast'; 
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar'; 
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const path = location.pathname;
  const showNavbar = 
          !path.includes('login') 
          || !path.includes('notfound') 
          || !path.includes('signup') 
          || !path.includes('forget-password') 
          || !path.includes('reset-password/:token');
          
  return (
    <div className="w-full min-h-screen font-sora overflow-hidden"> 
      {showNavbar && <Navbar />}
      <Outlet /> 
      <Toaster /> 
    </div>
  );
}

export default App;
