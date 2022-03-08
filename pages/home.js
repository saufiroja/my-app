/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Footer from '../components/home/footer/Footer';
import List from '../components/home/list/List';
import Navbar from '../components/home/navbar/Navbar';

function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      return router.push('/');
    }
  }, []);

  return (
    <>
      <Navbar />
      <List />
      <Footer />
    </>
  );
}

export default Home;
