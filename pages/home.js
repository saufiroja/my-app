/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import Footer from '../components/home/footer/Footer';
import List from '../components/home/list/List';
import Navbar from '../components/home/navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <List />
      <Footer />
    </>
  );
};

export default Home;
