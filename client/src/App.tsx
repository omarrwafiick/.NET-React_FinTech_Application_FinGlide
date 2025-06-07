import React from 'react';
import './index.css';    
import { Toaster } from 'react-hot-toast'; 
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar'; 
import { useLocation } from 'react-router-dom';
import { UserProvider } from './context/useAuth';

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
      <UserProvider> 
        {showNavbar && <Navbar />}
        <Outlet /> 
        <Toaster /> 
      </UserProvider>
    </div>
  );
}

export default App;
