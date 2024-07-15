// UserLayout.js
import React from 'react';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import Hero from '../../../components/hero/hero';
import  { Toaster } from 'react-hot-toast';

const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      
      <Hero ></Hero>
      <main>
      <Toaster />
        {children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
