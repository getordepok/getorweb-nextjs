import React from "react";
import Button from "./Button";
import CardSapaanPagi from "./Card/CardSapaanPagi";

export default function SapaanPagi(dataSapaan) {
  return (
    <div className='w-10/12 mx-auto'>
      <section className='mx-auto'>
        <div className='mx-auto flex flex-col my-10'>
          <h2 className='text-2xl font-semibold font-mono text-center sm:text-lg'>
            SAPAAN PAGI
          </h2>
          <CardSapaanPagi dataSapaan={dataSapaan.dataSapaan} />
          <Button
            href='#contact'
            pill
            variant='outline-yellow'
            className='w-6/12 mx-auto text-center transition-all border-2'
          >
            LIHAT SEMUA VIDEO
          </Button>
        </div>
      </section>
    </div>
  );
}
