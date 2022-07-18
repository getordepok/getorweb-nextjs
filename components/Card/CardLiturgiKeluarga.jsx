import React from "react";
// import Upper from "../helper/text";

const CardLiturgiKeluarga = () => {
  const warta = [
    {
      image: "images/c1.jpeg",
      sermon: "pnt. enov tikupasang",
      title: "MEMANCARKAN KARAKTER ALLAH",
      date: "28 MEI 2022, 09.00 WIB",
    },
    {
      image: "images/c2.jpeg",
      sermon: "bpk. mur sinampe",
      title: "TUHAN ITU BAIK",
      date: "21 MEI 2022, 09.00 WIB",
    },
    {
      image: "images/c1.jpeg",
      sermon: "pnt. ferdinandus d. bontong",
      title: "KERAJAAN BAGI KAWANAN KECIL",
      date: "14 MEI 2022, 09.00 WIB",
    },
    {
      image: "images/c2.jpeg",
      sermon: "diaken michael d. tonda",
      title: "PEMURIDAN KELUARGA",
      date: "7 MEI 2022, 09.00 WIB",
    },
  ];
  return (
    <div className='p-6 flex items-center'>
      <div className='flex flex-col md:flex-row lg:flex-row justify-around mx-auto'>
        {warta.map((wrt, index) => {
          return (
            <div
              key={index}
              className='p-4 m-4 bg-slate-100 shadow-md rounded-md hover:bg-white hover:scale-105 hover:shadow-indigo-500 transition-all border-b-indigo-500 border-b-4'
            >
              <img src={wrt.image} className='object-cover rounded-t-xl' />
              <h4 className='font-semibold mt-2 text-center'>{wrt.title}</h4>
              <h5>{wrt.sermon.toUpperCase()}</h5>
              <p className='text-sm text-gray-400 font-semibold mt-1'>
                {wrt.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardLiturgiKeluarga;
