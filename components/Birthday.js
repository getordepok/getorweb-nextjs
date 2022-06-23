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
      age: "40",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "70",
    },
    {
      image: "images/rinto.jpg",
      name: "pnt. enov tikupasang",
      age: "100",
    },
  ];
  return (
    <section>
      <h1 className="text-2xl font-semibold font-mono text-center">
        JEMAAT YANG BERULANG TAHUN HARI INI
      </h1>
      <h4 className="text-2 font-light font-mono text-center">
        AJARLAH KAMI MENGHITUNG HARI-HARI KAMI SEDEMIKIAN, HINGGA KAMI BEROLEH
        HATI YANG BIJAKSANA. MAZMUR 90:12
      </h4>
      <h4 className="text-2 font-semibold font-mono text-center">
        SEGENAP MAJELIS GEREJA DAN ANGGOTA GERAJA TORAJA JEMAAT DEPOK
        MENGUCAPKAN SELAMAT ULANG TAHUN, TUHAN MEMBERKATI
      </h4>
      <div className="bg-white shadow-skill rounded-md p-6 flex items-center">
        <div className="flex flex-col md:flex-row lg:flex-row justify-around mx-auto">
          {warta.map((wrt) => {
            return (
              <div className="bg-slate-100 mx-2 flex flex-col justify-center items-center rounded-xl shadow-md hover:bg-blue-500 ">
                <img
                  src={wrt.image}
                  className=" object-none rounded-t-xl max-h-96 max-w-10 w-48"
                />

                <h5>{wrt.name.toUpperCase()}</h5>
                <p className="text-sm text-gray-400 font-semibold mt-1">
                  {wrt.age} tahun
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Birthday;
