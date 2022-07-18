import React from "react";
import CardWartaJemaat from "./Card/CardWartaJemaat";

const WartaJemaat = () => {
  return (
    <section className='bg-slate-100 p-10'>
      <div className='w-10/12 mx-auto'>
        <h1 className='text-3xl mb-3 font-semibold text-center'>
          Warta Jemaat
        </h1>
        <h4 className='font-semibold text-center'>
          JANGANLAH KITA MENJAUHKAN DIRI DARI PERTEMUAN-PERTEMUAN IBADAH KITA,
          SEPERTI DIBIASAKAN OLEH BEBERAPA ORANG, TETAPI MARILAH KITA SALING
          MENASIHATI, DAN SEMAKIN GIAT MELAKUKANNYA MENJELANG HARI TUHAN YANG
          MENDEKAT. IBRANI 10:25
        </h4>
        <CardWartaJemaat />
      </div>
    </section>
  );
};
export default WartaJemaat;
