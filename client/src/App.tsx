import React from 'react';
import './index.css';    
import { Toaster } from 'react-hot-toast'; 
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="w-full min-h-screen font-sora overflow-hidden"> 
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
      <Toaster /> 
    </div>
  );
}

export default App;
