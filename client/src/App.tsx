import React from 'react';
import './index.css';    
import { Toaster } from 'react-hot-toast'; 
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="w-full min-h-screen font-sora"> 
      <Outlet />
      <Toaster /> 
    </div>
  );
}

export default App;
