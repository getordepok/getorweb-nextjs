import React from "react";
import Button from "../Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <>
      <div className="py-3 fixed w-full mx-auto top-0 z-10 backdrop-blur-lg shadow-md rounded-full ">
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
