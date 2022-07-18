import React from "react";

const CardWartaJemaat = () => {
  const warta = [
    {
      title: "WARTA - 29 MEI 2022",
      uploadDate: "28 MEI 2022, 09.00 WIB",
    },
    {
      title: "WARTA - 22 MEI 2022",
      uploadDate: "21 MEI 2022, 09.00 WIB",
    },
    {
      title: "WARTA - 15 MEI 2022",
      uploadDate: "14 MEI 2022, 09.00 WIB",
    },
    {
      title: "WARTA - 8 MEI 2022",
      uploadDate: "7 MEI 2022, 09.00 WIB",
    },
  ];
  return (
    <div className='p-3 flex items-center m-3'>
      <div className='flex flex-col md:flex-row lg:flex-row justify-around mx-auto'>
        {warta.map((wrt, index) => {
          return (
            <div
              key={index}
              className='bg-white mx-4 flex flex-col   justify-center items-center align-middle  rounded-lg p-3'
            >
              <h4 className='text-lg font-semibold'>{wrt.title}</h4>
              <img src='documents.png' className='as p-10' />
              <button className='border-2 px-3 border-indigo-500 rounded-md text-center text-lg font-semibold my-1 mx-2 hover:bg-red-500'>
                BACA WARTA
              </button>
              <p className='text-sm text-gray-400 font-semibold mt-1'>
                {wrt.uploadDate}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardWartaJemaat;
