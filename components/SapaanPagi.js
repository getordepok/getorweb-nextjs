import React from "react";

export default function SapaanPagi() {
  return (
    <>
      <section>
        <div className="container mx-auto pt-5 h-96 ">
          <h2 className="text-2xl font-semibold font-mono text-center">
            SAPAAN PAGI
          </h2>
          <div className="flex flex-row justify-around">
            <div className="border-2 border-red-500 h-50 w-50">1</div>
            <div className="border-2 border-red-500 h-50 w-50">2</div>
            <div className="border-2 border-red-500 h-50 w-50">3</div>
            <div className="border-2 border-red-500 h-50 w-50">4</div>
          </div>
        </div>
      </section>
    </>
  );
}
