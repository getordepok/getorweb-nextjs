import React from "react";

function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="flex justify-around items-center sticky top-0 z-50"
      >
        <div className="flex items-center">
          <img
            className="h-14 items-center"
            src="/logo_getor.png"
            alt="logo getor"
          />
          <div className="flex-col">
            <h1>GEREJA TORAJA </h1>
            <h1>JEMAAT DEPOK</h1>
          </div>
        </div>
        <div>MENU</div>
      </nav>
    </>
  );
}

export default Navbar;
