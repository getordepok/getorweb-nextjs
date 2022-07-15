import React from "react";

const Lapak_Food = () => {
  const Foods = [
    {
      key: 1,
      image: "images/c1.jpeg",
      menu: "RICA-RICA AYAM+NASI+SAYUR",
      price: "RP. 30.000 / PORSI",
      seller: "IBU CIA",
      contact: "081234567890",
    },
    {
      key: 2,
      image: "images/c2.jpeg",
      menu: "PA' PIONG 1 LAMPA",
      price: "RP. 115.000 / LAMPA",
      seller: "PONG BURI",
      contact: "081234567890",
    },
    {
      key: 3,
      image: "images/c3.jpeg",
      menu: "BAKSO BABI",
      price: "RP. 30.000 / PORSI",
      seller: "MAMA WIDYA",
      contact: "081234567890",
    },
    {
      key: 4,
      image: "images/c3.jpeg",
      menu: "BAKSO BABI",
      price: "RP. 30.000 / PORSI",
      seller: " MAMA WIDYA",
      contact: "081234567890",
    },
    {
      key: 5,
      image: "images/c2.jpeg",
      menu: "DEPPA TORI' 1 KG",
      price: "RP. 60.000 / KG",
      seller: "IBU CIA",
      contact: "081234567890",
    },
  ];
  return (
    <div className="bg-white shadow-skill rounded-md p-6 flex items-center">
      <div className="grid grid-flow-row-dense grid-cols-4">
        {Foods.map((food) => {
          return (
            <div
              key={food.key}
              className='bg-white mx-2 flex flex-col justify-center items-center rounded-xl shadow-md my-2 '
            >
              <img
                alt={food.contact}
                src={food.image}
                className='object-fill rounded-t-xl max-h-40 w-80'
              />
              <h4 className='text-lg font-semibold'>{food.menu}</h4>
              <h4 className='text-lg font-semibold'>{food.price}</h4>
              <h4 className='text-lg font-semibold'>LAPAK: {food.seller}</h4>
              <button
                title={food.contact}
                type='button'
                className='text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900'
              >
                HUBUNGI PENJUAL
              </button>
              <p className='text-sm text-gray-400 font-semibold mt-1'>
                {food.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Lapak_Food;
