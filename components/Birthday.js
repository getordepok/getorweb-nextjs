import React from "react";

const Birthday = () => {
  const warta = [
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "10",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "1",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "30",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "10",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "1",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "30",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "30",
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
        <div className=" shadow-skill rounded-md p-6">
          <div className="flex flex-wrap items-center justify-center mx-20 ">
            {warta.map((wrt) => {
              return (
                <div className="bg-slate-100 mx-4 mt-5 max-h-50 max-w-10 w-40 flex flex-col justify-center items-center rounded-xl">
                  <img
                    src={wrt.image}
                    className=" object-none rounded-t-xl max-h-50 max-w-10 w-40"
                  />

                  <h5 className="text-sm font-bold mt-1">
                    {wrt.name.toUpperCase()}
                  </h5>
                  <p className="text-sm text-gray-400 font-semibold mt-1">
                    {wrt.age} tahun
                  </p>
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
