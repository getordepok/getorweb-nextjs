import React from "react";

const Birthday = () => {
  const warta = [
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "1",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "2",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "3",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "4",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "5",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "6",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "7",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "8",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "9",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "10",
    },
  ];
  return (
    <section>
      <div className=" bg-slate-100 mx-10 mt-10">
        <h1 className="text-2xl font-semibold font-mono text-center">
          JEMAAT YANG BERULANG TAHUN HARI INI
        </h1>
        <h4 className="text-2 font-light font-mono text-center my-5">
          AJARLAH KAMI MENGHITUNG HARI-HARI KAMI SEDEMIKIAN, HINGGA KAMI BEROLEH
          HATI YANG BIJAKSANA. MAZMUR 90:12
        </h4>
        <h4 className="text-2 font-semibold font-mono text-center">
          SEGENAP MAJELIS GEREJA DAN ANGGOTA GERAJA TORAJA JEMAAT DEPOK
          MENGUCAPKAN SELAMAT ULANG TAHUN, TUHAN MEMBERKATI
        </h4>
        <div className=" flex shadow-skill rounded-md p-6 items-center  justify-center align-middle">
          {/* <div className="flex flex-wrap items-center justify-center mx-20 "> */}
          <div className=" mx-2 overflow-x-scroll flex flex-row  h-auto">
            {warta.map((wrt) => {
              return (
                <div className="  min-w-fit">
                  <div className=" mx-3 mt-5 flex flex-col justify-center items-center rounded-xl   w-48">
                    <img
                      src={wrt.image}
                      className="  object-cover rounded-t-xl  "
                    />
                    <h5 className="text-sm font-bold mt-1">
                      {wrt.name.toUpperCase()}
                    </h5>
                    <p className="text-sm text-gray-400 font-semibold mt-1">
                      {wrt.age} tahun
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Birthday;
