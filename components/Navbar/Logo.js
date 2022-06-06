import React from "react";

export default function Logo() {
  return (
    <>
      <div className="flex justify-around w-7/12 mx-auto items-center">
        <img
          className="h-16 items-center"
          src="/logo_getor.png"
          alt="logo getor"
        />
        <div className="text-center font-semibold">
          GEREJA TORAJA JEAMAAT DEPOK
        </div>
      </div>
    </>
  );
}
