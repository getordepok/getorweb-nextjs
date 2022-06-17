import React from "react";

function Navbar() {
  return (
    <>
      <nav id="navbar" className="flex justify-around items-center">
        <div className="flex items-center">
          <img
            className="h-14 items-center"
            src="/logo_getor.png"
            alt="logo getor"
          />
          <div>GEREJA TORAJA JEMAAT DEPOK</div>
        </div>
        <div>MENU</div>
      </nav>
    </>
  );
}

export default Navbar;
