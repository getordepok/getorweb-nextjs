import React from "react";
import Upper from "../helper/text";

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
      image: "images/c3.jpeg",
      sermon: "pnt. ferdinandus d. bontong",
      title: "KERAJAAN BAGI KAWANAN KECIL",
      date: "14 MEI 2022, 09.00 WIB",
    },
    {
      image: "images/c1.jpeg",
      sermon: "diaken michael d. tonda",
      title: "PEMURIDAN KELUARGA",
      date: "7 MEI 2022, 09.00 WIB",
    },
  ];
  return (
    <div className="bg-white shadow-skill rounded-md p-6 flex items-center">
      <div className="flex flex-col md:flex-row lg:flex-row justify-around mx-auto">
        {warta.map((wrt) => {
          return (
            <div className="bg-slate-100 mx-2 flex flex-col justify-center items-center rounded-xl shadow-md hover:bg-blue-500 ">
              <img
                src={wrt.image}
                className="object-fill rounded-t-xl max-h-40 w-80"
              />
              <h4 className="text-lg font-semibold">{wrt.title}</h4>
              <h5>{wrt.sermon.toUpperCase()}</h5>
              <p className="text-sm text-gray-400 font-semibold mt-1">
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
