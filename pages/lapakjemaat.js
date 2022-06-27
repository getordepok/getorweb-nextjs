import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Lapaks from "../components/Lapaks";

const Lapakjemaat = () => {
  return (
    <>
      <Navbar />
      <Slideshow />
      <Lapaks color="pink" />
      <Footer />
    </>
  );
};
export default Lapakjemaat;
