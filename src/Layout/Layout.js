
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

const LayoutDefault = ({ children }) => (
  <div className='overflow-hidden h-auto'>
    <Header />
    <Outlet/>
    <Footer />
  </div>
);

export default LayoutDefault;  