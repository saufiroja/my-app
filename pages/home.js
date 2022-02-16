/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Footer from "../components/home/footer/Footer";
import List from "../components/home/list/List";
import Navbar from "../components/home/navbar/Navbar";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return router.push("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <List />
      <Footer />
    </>
  );
};

export default Home;
