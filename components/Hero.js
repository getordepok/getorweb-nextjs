import React from "react";
import Navbar from "./Navbar/Navbar";
import Slideshow from "./Slideshow";

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="bg-hero">
        <div className="border-2 z-50 h-screen items-center flex justify-center">
          <Slideshow />
        </div>
      </div>
    </>
  );
}
