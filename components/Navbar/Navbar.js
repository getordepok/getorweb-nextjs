import React from "react";
import Button from "../Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <>
      <div
        id="navbar"
        className="py-3 sticky w-full mx-auto font-mono font-semibold top-0 z-50 backdrop-blur-lg shadow-md rounded-b-3xl transition-all duration-300"
      >
        <div className="flex justify-around items-center">
          <div className="w-3/12">
            <Logo />
          </div>
          <div className="w-6/12 hidden md:block">
            <Nav dir="horizontal" scheme="light" />
          </div>
          <div className="w-3/12 text-center hidden md:block">
            <Button href="#contact" pill variant="outline-yellow">
              HUBUNGI TU
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
