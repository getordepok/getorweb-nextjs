import React from "react";
import Button from "../Button";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Navbar() {
  return (
    <>
      <div
        id="navbar"
        className="py-3 px-5 sticky w-full font-mono font-semibold top-0 z-50 backdrop-blur-lg shadow-md rounded-b-3xl transition-all duration-300"
      >
        <div className="flex justify-between items-center">
          <div className="">
            <Logo />
          </div>
          <div className="justify-center hidden md:block">
            <Nav dir="horizontal" scheme="light" />
          </div>
          <div className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
