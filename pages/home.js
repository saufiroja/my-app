/* eslint-disable react-hooks/exhaustive-deps */
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

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
m;
