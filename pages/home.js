import React from 'react';

import Footer from '../components/home/footer/Footer';
import List from '../components/home/list/List';
import Navbar from '../components/home/navbar/Navbar';

const home = () => {
  return (
    <>
      <Navbar />
      <List />
      <Footer />
    </>
  );
};

export default home;
